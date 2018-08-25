import React, { Component } from 'react'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Item from './item'

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
        <Li key={index}>
          <Item todo={todo} />
          <Span onClick={() => remove(todo)}>X</Span>
        </Li>
      )
    )
  }
}

const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid #EEE
`

const Span = styled.span`
  padding: 0 4px;
  border: 1px solid #777;
  border-radius: 100%;
  cursor: pointer
`
