import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Icon } from 'antd'
import Right from './right'
import styles from '@styles/layouts'

const { Header } = Layout

@inject('_GV_')
@observer
export default class Main extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      collapsed: PropTypes.bool.isRequired,
      toggle: PropTypes.func.isRequired
    }).isRequired
  }

  render () {
    const { collapsed, toggle } = this.props._GV_
    return (
      <Header className={styles.header}>
        <Icon
          className={styles.collapsed}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <RightWapper>
          <Right />
        </RightWapper>
      </Header>
    )
  }
}

const RightWapper = styled.div`
  height: 100%;
  float: right
`
