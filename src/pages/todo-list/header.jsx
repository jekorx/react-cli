import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styles from '@styles/todos'

@inject('todos')
@observer
export default class Header extends Component {
  static propTypes = {
    todos: PropTypes.shape({
      add: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    val: ''
  }

  handleInput = e => {
    this.setState({
      val: e.target.value
    })
  }

  handleAdd = e => {
    e.preventDefault()
    if (!this.state.val) {
      alert('请输入内容！')
      return false
    }
    this.props.todos.add(this.state.val)
    this.setState({
      val: ''
    })
  }

  render () {
    return (
      <form>
        <input
          type="text"
          placeholder="What need to be finished?"
          className={styles.input}
          value={this.state.val}
          onChange={this.handleInput}
        />
        <input
          type="submit"
          value="add"
          className={styles.submit}
          onClick={this.handleAdd}
        />
      </form>
    )
  }
}
