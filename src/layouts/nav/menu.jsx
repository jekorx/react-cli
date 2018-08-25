import React, { Component } from 'react'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import styles from '@styles/layouts'

const { SubMenu, Item } = Menu

@inject('_GV_')
@observer
export default class NavMenu extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      menuHeight: PropTypes.number.isRequired,
      collapsed: PropTypes.bool.isRequired,
      menu: ObservablePropTypes.observableArray.isRequired
    }).isRequired
  }

  select = window.location.pathname
  open = this.select.substring(0, this.select.lastIndexOf('/'))

  state = {
    openKeys: this.open ? [this.open] : [],
    selectedKeys: this.select ? [this.select] : []
  }

  render () {
    const { openKeys, selectedKeys } = this.state
    const { menu, menuHeight, collapsed } = this.props._GV_
    return (
      <Menu
        defaultOpenKeys={collapsed ? [] : openKeys}
        defaultSelectedKeys={selectedKeys}
        style={{ height: menuHeight }}
        className={styles.menu}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {menu && menu.length > 0 && menu.map(m => {
          if (!m.children) {
            return (
              <Item key={m.code}>
                <Link to={m.url}>
                  <Icon type={m.icon} />
                  <span>{m.title}</span>
                </Link>
              </Item>
            )
          }
          return (
            <SubMenu
              key={m.code}
              title={
                <span>
                  <Icon type={m.icon} />
                  <span>{m.title}</span>
                </span>
              }
            >
              {m.children.map(cm =>
                <Item key={cm.code}>
                  <Link to={cm.url}>
                    <Icon type={cm.icon} />
                    <span>{cm.title}</span>
                  </Link>
                </Item>
              )}
            </SubMenu>
          )
        })}
      </Menu>
    )
  }
}
