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
      <ul className={styles.menu}>
        <li>
          <User />
        </li>
        <li className={styles.divider}></li>
        {menu.map((m, i) =>
          m.path
            ? <li key={m.path} onClick={drawerChange}>
              <Link to={m.path} className={styles.link}>
                <Icon type={m.icon} className={styles['link-icon']}/>
                <span className={styles['link-title']}>{m.title}</span>
              </Link>
            </li>
            : <li
              key={`divider${i}`}
              className={styles.divider}
            ></li>
        )}
        {isLogin && <Logout />}
      </ul>
    )
  }
}
