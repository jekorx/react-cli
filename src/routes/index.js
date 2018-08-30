import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '@components/loading'

// 非懒加载页面
function Index () {
  return (
    <div>
      <p>123</p>
      <p>12354243</p>
      <p>1235424334234</p>
      <p>1235424334</p>
      <p>1235424</p>
      <p>1235</p>
      <p>1</p>
      <p>1234</p>
    </div>
  )
}
// 懒加载页面包装为Loadable
const LoadWrapper = importComponent => {
  return Loadable({
    loader: importComponent,
    loading: Loading
  })
}
// 懒加载页面
const Login = LoadWrapper(() => import(/* webpackChunkName: "login" */'@pages/login'))
const NoMatch = () => <Redirect to="/" />
// 路由列表
export const routes = [
  { path: '/', exact: true, component: Index },
  { path: '/login', exact: true, component: Login },
  { component: NoMatch }
]
// 路由页面，跟页面需传入路由表routes数组，子页面需传入props的routes
export class RouteViews extends Component {
  static propTypes = {
    routes: PropTypes.array
  }

  render () {
    const { routes } = this.props
    return (
      <Switch>
        {routes.map(route => {
          return route.path
            ? <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={props =>
                <route.component
                  {...props}
                  routes={route.routes}
                />
              }
            />
            : <Route
              key="404"
              render={props =>
                <route.component
                  {...props}
                  routes={route.routes}
                />
              }
            />
        })}
      </Switch>
    )
  }
}
