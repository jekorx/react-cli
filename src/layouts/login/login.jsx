import React, { Component } from 'react'
import Form from './form'
import styles from '@styles/login'

export default class Login extends Component {
  render () {
    return (
      <div className={styles.login}>
        <Form/>
      </div>
    )
  }
}
