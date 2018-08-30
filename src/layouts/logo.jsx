import React, { PureComponent } from 'react'
import logo from '@images/logo.svg'
import styles from '@styles/layouts'

export default class Logo extends PureComponent {
  render () {
    return (
      <img src={logo} className={styles.logo} alt="logo" />
    )
  }
}
