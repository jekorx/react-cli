import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Crow extends PureComponent {
  static propTypes = {
    category: PropTypes.string.isRequired
  }

  render () {
    const { category } = this.props
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}
