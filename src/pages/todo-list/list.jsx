import React, { Component } from 'react'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import PropTypes from 'prop-types'
import Item from './item'
import styles from '@styles/todos'

@inject('todos')
@observer
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.shape({
      list: ObservablePropTypes.observableArray,
      remove: PropTypes.func
    })
  }

  render () {
    const { list, remove } = this.props.todos
    return (
      list.map((todo, index) =>
        <li key={index} className={styles.li}>
          <Item todo={todo} />
          <span className={styles.span} onClick={() => remove(todo)}>X</span>
        </li>
      )
    )
  }
}
