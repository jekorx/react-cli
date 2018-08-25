import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import styles from '@styles/layouts'

const { Divider, Item } = Menu

export default class UserMenu extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  render () {
    const { logout } = this.props
    return (
      <Menu className={styles['user-menu']}>
        <Item>
          <Icon type="user" />
          <span>测试1</span>
        </Item>
        <Divider className={styles.divider} />
        <Item onClick={logout}>
          <Icon type="logout" />
          <span>退出登录</span>
        </Item>
      </Menu>
    )
  }
}
