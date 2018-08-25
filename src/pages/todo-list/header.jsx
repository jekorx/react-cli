import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
        <Input
          type="text"
          placeholder="What need to be finished?"
          value={this.state.val}
          onChange={this.handleInput}
        />
        <Submit
          type="submit"
          value="add"
          onClick={this.handleAdd}
        />
      </form>
    )
  }
}

const Input = styled.input`
  padding: 8px;
  border: 1px solid #CCC
`
const Submit = styled.input`
  padding: 8px 12px;
  margin-left: 10px;
  border: 1px solid #CCC;
  border-radius: 4px
`
