import React, { Component } from 'react'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, List } from 'antd'
import Footer from './footer'

@inject('todos')
@observer
export default class Items extends Component {
  static propTypes = {
    todos: PropTypes.shape({
      list: ObservablePropTypes.observableArray,
      remove: PropTypes.func
    })
  }

  render () {
    const { list, remove } = this.props.todos
    return (
      <List bordered size="small" footer={<Footer />}>
        {list.map(todo => (
          <List.Item key={todo.id} actions={[
            <Button
              key="delete"
              type="danger"
              size="small"
              onClick={() => {
                remove(todo)
              }}
            >X</Button>
          ]}>
            <List.Item.Meta
              description={todo.content}
            />
          </List.Item>
        ))}
      </List>
    )
  }
}
