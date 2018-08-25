import React, { Component } from 'react'
import styled from 'styled-components'
import { Alert } from 'antd'

export default class Error extends Component {
  render () {
    return (
      <ErrorWrapper>
        <Alert
          message="错误"
          description="页面加载错误！"
          type="error"
          showIcon
        />
      </ErrorWrapper>
    )
  }
}

const ErrorWrapper = styled.div`
  text-align: center;
  >div {
    text-align: left;
    display: inline-block;
    width: 300px
  }
`
