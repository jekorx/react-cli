import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import Header from './header'
import List from './list'
import Footer from './footer'
import styles from '@styles/todos'

@observer
export default class Main extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <ul className={styles.ul}>
          <List />
        </ul>
        <Footer />
      </Fragment>
    )
  }
}
