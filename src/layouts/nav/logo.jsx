import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

@inject('_GV_')
@observer
export default class NavLogo extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      collapsed: PropTypes.bool.isRequired,
      headerHeight: PropTypes.number.isRequired
    }).isRequired
  }

  render () {
    const { collapsed, headerHeight } = this.props._GV_
    return (
      <Logo height={headerHeight}>
        <img src={require('@images/logo.svg')} alt="logo"/>
        {!collapsed && <strong>
          React App
        </strong>}
      </Logo>
    )
  }
}

const Logo = styled.div`
  overflow: hidden;
  height: ${props => props.height}px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  text-align: center
  img {
    width: ${props => props.height}px;
    height: ${props => props.height}px
  }
  strong {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 30px
  }
`
