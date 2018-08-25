import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'
import Error from './error'

export default function Loading ({ error, pastDelay }) {
  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    )
  } else if (pastDelay) {
    return (
      <Wrapper>
        <Spin />
      </Wrapper>
    )
  } else {
    return null
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around
`
