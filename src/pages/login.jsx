import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, InputItem, Toast } from 'antd-mobile'
import $http from '@api'
import styles from '@styles/login'

@inject('_GV_', 'user')
@observer
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  static propTypes = {
    _GV_: PropTypes.shape({
      setPath: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.shape({
      isLogin: PropTypes.bool.isRequired,
      setUserInfo: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    accessToken: '',
    loading: false,
    isLogin: false
  }

  componentDidMount () {
    this.inputRef.focus()
    this.props._GV_.setPath('login')
  }

  handleInput = value => {
    this.setState({
      accessToken: value
    })
  }

  async handleLogin (e) {
    e.preventDefault()
    const { accessToken } = this.state
    if (!accessToken) {
      Toast.fail('请输入Access Token！')
      return false
    }
    this.setState({
      isLogin: true
    })
    let res = await $http.post('accesstoken', {
      accesstoken: accessToken
    })
    if (res.success) {
      this.setState({
        accessToken: '',
        isLogin: false
      })
      this.props.user.setUserInfo({
        id: res.id,
        name: res.loginname,
        avatar: res.avatar_url,
        isLogin: true
      })
    }
  }

  render () {
    const { isLogin } = this.props.user
    const { accessToken, loading } = this.state
    return isLogin
      ? <Redirect to="/" />
      : <form className={styles.form}>
        <InputItem
          placeholder="Access Token"
          className={styles['ignore-input']}
          ref={e => { this.inputRef = e }}
          clear={true}
          value={accessToken}
          onChange={this.handleInput}
        />
        <Button
          type="primary"
          loading={loading}
          disabled={loading}
          onClick={this.handleLogin}
        >登录</Button>
      </form>
  }
}
