import React, { Component, Fragment } from 'react'
import { routes, RouteViews } from '@routes'
import Header from './header'
import Left from './left'

export default class DftLayout extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Left />
        <div style={{ paddingTop: 45 }}>
          <RouteViews routes={routes} />
        </div>
      </Fragment>
    )
  }
}
