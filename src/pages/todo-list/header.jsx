import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Input, Form, Button } from 'antd'

const FormItem = Form.Item

@inject('todos')
@observer
class Header extends Component {
  static propTypes = {
    form: PropTypes.shape({
      getFieldDecorator: PropTypes.func.isRequired,
      validateFields: PropTypes.func.isRequired,
      setFieldsValue: PropTypes.func.isRequired
    }).isRequired,
    todos: PropTypes.shape({
      add: PropTypes.func.isRequired
    }).isRequired
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.todos.add(values.todo)
        this.props.form.setFieldsValue({
          todo: ''
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('todo', {
            rules: [{ required: true, message: 'Please input something to do!' }]
          })(
            <Input placeholder="What need to be finished?" style={{ width: 200 }} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" icon="plus">add</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Header)
