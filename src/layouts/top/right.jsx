import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar, Dropdown } from 'antd'
import UserMenu from './user-menu'

@inject('_GV_')
@observer
export default class Right extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      userInfo: PropTypes.object,
      setUserInfo: PropTypes.func
    }).isRequired
  }

  handleLogout = () => {
    let name = '__UTOKEN__'
    let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    let arr = document.cookie.match(reg)
    let val
    if (arr && arr.length > 2) {
      val = arr[2]
    }
    if (val) {
      let exp = new Date()
      exp.setTime(exp.getTime() - 1)
      document.cookie = `__UTOKEN__=${val};expires=${exp.toGMTString()}`
      console.log('Clear cookie success!')
    }
    this.props._GV_.setUserInfo(null)
  }

  render () {
    const { userInfo } = this.props._GV_
    return userInfo && userInfo.isLogin
      ? <Fragment>
        <Dropdown overlay={<UserMenu logout={this.handleLogout} />}>
          <UserInfo>
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <strong>{userInfo && userInfo.userName}</strong>
          </UserInfo>
        </Dropdown>
      </Fragment>
      : <Redirect to="/" />
  }
}

const UserInfo = styled.div`
  cursor: pointer;
  >strong {
    vertical-align: middle;
    padding-left: 10px;
    padding-right: 20px
  }
`
