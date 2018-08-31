import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '@components/icon'
import styles from '@styles/layouts'

import User from './user'

@inject('_GV_', 'user')
@observer
export default class Menu extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      menu: PropTypes.array.isRequired,
      drawerChange: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.shape({
      isLogin: PropTypes.bool.isRequired,
      setUserInfo: PropTypes.func.isRequired
    }).isRequired
  }
  handleLogout = () => {
    this.props.user.setUserInfo({
      id: '',
      name: '',
      avatar: '',
      isLogin: false
    })
    this.props._GV_.drawerChange()
  }
  render () {
    const { isLogin } = this.props.user
    const { drawerChange, menu } = this.props._GV_
    return (
      <ul className={styles['ignore-menu']}>
        <li>
          <User />
        </li>
        <li className={styles['ignore-divider']}></li>
        {menu.map((m, i) =>
          m.path
            ? <li key={m.path} onClick={drawerChange}>
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
