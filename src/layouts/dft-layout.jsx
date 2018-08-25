import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { RouteViews } from '@routes'
import { Layout } from 'antd'
import NavLogo from './nav/logo'
import NavMenu from './nav/menu'
import Top from './top'
import styles from '@styles/layouts'

const { Sider, Content } = Layout

@inject('_GV_')
@observer
export default class DftLayout extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    _GV_: PropTypes.shape({
      collapsed: PropTypes.bool.isRequired,
      menuHeight: PropTypes.number.isRequired
    }).isRequired
  }

  render () {
    const { routes } = this.props
    const { collapsed, menuHeight } = this.props._GV_
    return (
      <Layout className={styles.layout}>
        <Sider collapsed={collapsed}>
          <NavLogo />
          <NavMenu />
        </Sider>
        <Layout>
          <Top />
          <Content className={styles.content} style={{ height: menuHeight }}>
            <RouteViews routes={routes} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
