import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '@components/loading'

// 非懒加载页面
import Index from '@pages/index'
// 懒加载页面包装为Loadable
const LoadWrapper = importComponent => {
  return Loadable({
    loader: importComponent,
    loading: Loading
  })
}
// 懒加载页面
const Home = LoadWrapper(() => import(/* webpackChunkName: "home" */'@pages/home'))
const TodoList = LoadWrapper(() => import(/* webpackChunkName: "home/todolist" */'@pages/todo-list'))
const Test1 = LoadWrapper(() => import(/* webpackChunkName: "home/test1" */'@pages/test1'))
const Test2 = LoadWrapper(() => import(/* webpackChunkName: "home/test2" */'@pages/test2'))
const Test3 = LoadWrapper(() => import(/* webpackChunkName: "home/test3" */'@pages/test3'))
const Test4 = () => <Redirect to="/home/test1" />
// 路由列表
export const routes = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/test1',
        component: Test1
      },
      {
        path: '/home/test2',
        component: Test2
      },
      {
        path: '/home/test3',
        component: Test3
      },
      {
        path: '/home/test4',
        component: Test4
      }
    ]
  },
  {
    path: '/todolist',
    component: TodoList
  }
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
        {routes.map(route =>
          <Route
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
        )}
      </Switch>
    )
  }
}
