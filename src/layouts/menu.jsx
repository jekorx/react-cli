import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Icon from '@components/icon'
import Logout from './logout'
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
      isLogin: PropTypes.bool.isRequired
    }).isRequired
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
        {isLogin && <Logout />}
      </ul>
    )
  }
}
