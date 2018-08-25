import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button } from 'antd'
import $http from '@api'

const FormItem = Form.Item

@inject('_GV_')
@observer
class LoginForm extends Component {
  static propTypes = {
    form: PropTypes.shape({
      getFieldDecorator: PropTypes.func.isRequired,
      validateFields: PropTypes.func.isRequired
    }).isRequired,
    _GV_: PropTypes.shape({
      userInfo: PropTypes.object,
      setUserInfo: PropTypes.func
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        $http.post('sign/v1/appIn', {
          login: values.userName,
          pwd: values.password
        }).then(res => {
          console.log(res)
          if (res.code === 0) {
            document.cookie = `__UTOKEN__=${res.data}`
            console.log('Set cookie success！')
            this.props._GV_.setUserInfo({
              userName: values.userName,
              token: res.data,
              isLogin: true
            })
          }
        })
      }
    })
  }

  render () {
    const { userInfo } = this.props._GV_
    const { getFieldDecorator } = this.props.form
    return userInfo && userInfo.isLogin
      ? <Redirect to="/home" />
      : <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            initialValue: 'admin1',
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              placeholder="Username"
              prefix={<Icon type="user" />}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            initialValue: 'admin',
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              type="password"
              placeholder="Password"
              prefix={<Icon type="lock" />}
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
  }
}

export default Form.create()(LoginForm)
