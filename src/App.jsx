import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader'
import store from '@store'
import { routes, RouteViews } from '@routes'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import '@styles/global.css'

const baseName = process.env.PUBLIC_URL || '/'

class App extends Component {
  render () {
    return (
      <Provider {...store}>
        <Router basename={baseName}>
          <LocaleProvider locale={zhCN}>
            <RouteViews routes={routes}/>
          </LocaleProvider>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
