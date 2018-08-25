import React, { Component } from 'react'
import { Button, DatePicker } from 'antd-mobile'
import styles from '@styles/index'
import $http from '@api'

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
      <div>
        <Button type="primary" onClick={this.handleTest}>primary</Button>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          onChange={date => console.log(date)}
        >
          <strong className={styles.index}>Date Date Date Date</strong>
        </DatePicker>
      </div>
    )
  }
}
