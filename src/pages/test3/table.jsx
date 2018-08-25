import React, { Component } from 'react'
import List from './list'

export default class Table extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <List />
        </tbody>
      </table>
    )
  }
}
