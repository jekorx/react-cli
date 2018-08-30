import React, { Component, Fragment } from 'react'
import { Drawer, NavBar } from 'antd-mobile'
import { routes, RouteViews } from '@routes'
import Icon from '@components/icon'
import Header from './header'
import Menu from './menu'
import styles from '@styles/layouts'

export default class DftLayout extends Component {
  state = {
    open: false
  }
  onOpenChange = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render () {
    return (
      <Fragment>
        <NavBar
          mode="light"
          icon={<Icon type="menu" size="20" />}
          onLeftClick={this.onOpenChange}
          className={styles['ignore-header']}
          rightContent={<Icon type="release" color="#1890ff" size="20" />}
        >
          <Header />
        </NavBar>
        <Drawer
          open={this.state.open}
          onOpenChange={this.onOpenChange}
          sidebar={<Menu onChange={this.onOpenChange} />}
        >
          <div style={{ paddingTop: 45 }}>
            <RouteViews routes={routes} />
          </div>
        </Drawer>
      </Fragment>
    )
  }
}
