import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader'
import store from '@store'
import { routes, RouteViews } from '@routes'
import '@styles'

const baseName = process.env.PUBLIC_URL || '/'

class App extends Component {
  render () {
    return (
      <Provider {...store}>
        <Router basename={baseName}>
          <RouteViews routes={routes} />
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
