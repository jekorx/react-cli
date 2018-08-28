import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styles from '@styles/todos'

@observer
export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  }

  render () {
    const { content, finished, toggle } = this.props.todo
    return (
      <Fragment>
        <input
          type="checkbox"
          value={finished}
          onClick={() => toggle()}
        />
        <p className={[styles.cnt, finished ? styles.finished : ''].join(' ')}>{content}</p>
      </Fragment>
    )
  }
}
