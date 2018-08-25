import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { RouteViews } from '@routes'

export default class Main extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }

  render () {
    const { routes } = this.props
    return (
      <div>
        <h4>home</h4>
        <hr />
        <NavLink to="/home/test1" activeStyle={{
          fontSize: '20px',
          color: 'blue'
        }}>test1</NavLink>
        <Link to="/home/test2">test2</Link>
        <Link to="/home/test3">test3</Link>
        <Link to="/home/test4">test4 (redirect to test1)</Link>
        <RouteViews routes={routes} />
      </div>
    )
  }
}
