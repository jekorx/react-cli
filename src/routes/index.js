import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
// import Loadable from 'react-loadable'
// import Loading from '@components/loading'

// 非懒加载页面
import Index from '@pages/index'
// 懒加载页面包装为Loadable
/* const LoadWrapper = importComponent => {
  return Loadable({
    loader: importComponent,
    loading: Loading
  })
} */
// 懒加载页面
const NoMatch = () => <Redirect to="/" />
// 路由列表
export const routes = [
  { path: '/', exact: true, component: Index },
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
