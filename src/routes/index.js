import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '@components/loading'

// 非懒加载页面
import Layout from '@layouts'
// 懒加载页面包装为Loadable
const LoadWrapper = importComponent => {
  return Loadable({
    loader: importComponent,
    loading: Loading
  })
}
// 懒加载页面
const Login = LoadWrapper(() => import(/* webpackChunkName: "login" */'@layouts/login'))
const Home = LoadWrapper(() => import(/* webpackChunkName: "home" */'@pages/home'))
const page1 = {
  TodoList: LoadWrapper(() => import(/* webpackChunkName: "page1/todos" */'@pages/todo-list')),
  Upload: LoadWrapper(() => import(/* webpackChunkName: "page1/upload" */'@pages/upload'))
}
const NoMatch = () => <Redirect to="/" />
// 路由列表
export const routes = [
  { path: '/', component: Login, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/logout', component: Login, exact: true },
  {
    path: '/home',
    component: Layout,
    routes: [
      { path: '/home', component: Home, exact: true },
      { path: '/home/page1/todos1', component: page1.TodoList },
      { path: '/home/page1/upload', component: page1.Upload },
      { component: NoMatch }
    ]
  },
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
