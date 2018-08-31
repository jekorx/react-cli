import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '@components/loading'

// 非懒加载页面
import List from '@pages/list'
// 懒加载页面包装为Loadable
const LoadWrapper = importComponent => {
  return Loadable({
    loader: importComponent,
    loading: Loading
  })
}
// 懒加载页面
const Login = LoadWrapper(() => import(/* webpackChunkName: "login" */'@pages/login'))
const NoMatch = () => <Redirect to="/all" />
// 路由列表
export const routes = [
  { path: '/', exact: true, component: NoMatch },
  { path: '/login', component: Login, title: '登录' },
  { path: '/all', component: List, title: '全部' },
  { path: '/good', component: List, title: '精华' },
  { path: '/share', component: List, title: '分享' },
  { path: '/ask', component: List, title: '问答' },
  { path: '/job', component: List, title: '招聘' },
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