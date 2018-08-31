import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Icon from '@components/icon'
import styles from '@styles/layouts'

@inject('_GV_', 'user')
@observer
export default class User extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      drawerChange: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isLogin: PropTypes.bool.isRequired
    }).isRequired
  }
  render () {
    const { drawerChange } = this.props._GV_
    const { name, avatar, isLogin } = this.props.user
    return isLogin
      ? <figure className={styles['ignore-user']}>
        <img src={avatar} className={styles['ignore-avatar']} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      : <Link
        to="/login"
        onClick={drawerChange}
        className={styles['ignore-login']}
      >
        <Icon type="user" color="#1890ff" size="30" />
        <span className={styles['ignore-text']}>登录</span>
      </Link>
  }
}
