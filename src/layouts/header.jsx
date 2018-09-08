import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import Icon from '@components/icon'
import Logo from './logo'
import styles from '@styles/layouts'
import menuData from '@src/json/menu'

const withBack = ({ location: { pathname } }) => {
  return !menuData.concat([{
    path: '/'
  }]).find(m => m.path === pathname)
}

@inject('_GV_')
@observer
class Header extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      title: PropTypes.string.isRequired,
      drawerChange: PropTypes.func.isRequired
    }).isRequired,
    history: PropTypes.object.isRequired
  }
  handleLeftClick = () => {
    const { history } = this.props
    if (withBack(history)) {
      history.goBack()
    } else {
      history.push('/create')
    }
  }
  render () {
    const { _GV_: { title, drawerChange }, history } = this.props
    return (
      <NavBar
        mode="light"
        icon={
          <Icon
            className={styles['header-icon']}
            type={withBack(history) ? 'back' : 'release'}
            color={withBack(history) ? '#000' : '#1890ff'}
          />
        }
        onLeftClick={this.handleLeftClick}
        className={styles.header}
        rightContent={
          <Icon
            type="menu"
            className={styles['header-icon']}
            onClick={drawerChange}
          />
        }
      >
        <Logo />
        {title && <span className={styles['header-title']}>{title}</span>}
      </NavBar>
    )
  }
}

export default withRouter(Header)
