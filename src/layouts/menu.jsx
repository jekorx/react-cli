import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '@components/icon'
import User from './user'
import styles from '@styles/layouts'

@inject('user')
@observer
export default class Menu extends Component {
  static propTypes = {
    user: PropTypes.shape({
      isLogin: PropTypes.bool.isRequired,
      setUserInfo: PropTypes.func.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired
  }
  state = {
    menu: [
      { path: '/all', title: '全部', icon: 'list' },
      { path: '/good', title: '精华', icon: 'star' },
      { path: '/share', title: '分享', icon: 'share' },
      { path: '/ask', title: '问答', icon: 'msg' },
      { path: '/job', title: '招聘', icon: 'users' },
      {},
      { path: '/message', title: '消息', icon: 'ring' },
      { path: '/about', title: '关于', icon: 'info' }
    ]
  }
  handleClick = () => {
    this.props.onChange()
  }
  handleLogout = () => {
    this.props.user.setUserInfo({
      id: '',
      name: '',
      avatar: '',
      isLogin: false
    })
    this.props.onChange()
  }
  render () {
    const { menu } = this.state
    const { onChange } = this.props
    const { isLogin } = this.props.user
    return (
      <ul className={styles['ignore-menu']}>
        <li>
          <User onChange={onChange}/>
        </li>
        <li className={styles['ignore-divider']}></li>
        {menu.map((m, i) =>
          m.path
            ? <li key={m.path} onClick={this.handleClick}>
              <Link to={m.path} className={styles['ignore-link']}>
                <Icon type={m.icon} clsName={styles['ignore-icon']}/>
                <span className={styles['ignore-title']}>{m.title}</span>
              </Link>
            </li>
            : <li
              key={`divider${i}`}
              className={styles['ignore-divider']}
            ></li>
        )}
        {isLogin && <Fragment>
          <li className={styles['ignore-divider']}></li>
          <li onClick={this.handleLogout}>
            <span className={styles['ignore-link']}>
              <Icon type="logout" clsName={styles['ignore-icon']}/>
              <span className={styles['ignore-title']}>退出</span>
            </span>
          </li>
        </Fragment>}
      </ul>
    )
  }
}
