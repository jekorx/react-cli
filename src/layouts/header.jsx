import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends PureComponent {
  render () {
    return (
      <div>
        <Link to="/">index</Link>
        <Link to="/home">home</Link>
        <Link to="/todolist">todolist</Link>
        <hr />
      </div>
    )
  }
}
