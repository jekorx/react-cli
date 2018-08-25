import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import Header from './header'
import List from './list'
import Footer from './footer'

@observer
export default class Main extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Ul>
          <List />
        </Ul>
        <Footer />
      </Fragment>
    )
  }
}

const Ul = styled.ul`
  padding: 0;
  list-style: none
`
