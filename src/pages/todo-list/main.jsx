import React, { PureComponent, Fragment } from 'react'
import Header from './header'
import Items from './items'

export default class Main extends PureComponent {
  render () {
    return (
      <Fragment>
        <Header />
        <Items />
      </Fragment>
    )
  }
}
