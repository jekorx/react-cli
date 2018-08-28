import React, { Component } from 'react'
import { Button, Icon } from 'antd-mobile'
import $http from '@api'
import styles from '@styles/page'

export default class Index extends Component {
  handleTest = () => {
    $http.get('topics').then(res => {
      console.log(res)
    })
    $http.post('accesstoken', {
      accesstoken: ''
    }).then(res => {
      console.log(res)
    })
  }

  render () {
    return (
      <div className={styles.index}>
        <Button type="primary">123123</Button>
        <Icon type="plus" />
      </div>
    )
  }
}
