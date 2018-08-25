import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('todos')
@observer
export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.shape({
      left: PropTypes.number.isRequired
    }).isRequired
  }

  render () {
    const { left } = this.props.todos
    return (
      <p>{left} item(s) is not finished!</p>
    )
  }
}
