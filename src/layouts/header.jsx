import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import Icon from '@components/icon'
import Logo from './logo'
import styles from '@styles/layouts'

@inject('_GV_')
@observer
export default class Header extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      title: PropTypes.string.isRequired,
      drawerChange: PropTypes.func.isRequired
    }).isRequired
  }
  render () {
    const { title, drawerChange } = this.props._GV_
    return (
      <NavBar
        mode="light"
        icon={<Icon type="menu" size="20" />}
        onLeftClick={drawerChange}
        className={styles['ignore-header']}
        rightContent={
          <Link to="/create">
            <Icon type="release" color="#1890ff" size="20" />
          </Link>
        }
      >
        <Logo />
        <span style={{ paddingRight: 45 }}>{title}</span>
      </NavBar>
    )
  }
}
