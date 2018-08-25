import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from '@styles/layouts'

export default class Header extends PureComponent {
  render () {
    return (
      <div className={styles.header}>
        <Link to="/">index</Link>
        <Link to="/home">home</Link>
        <Link to="/todolist">todolist</Link>
        <hr />
      </div>
    )
  }
}
