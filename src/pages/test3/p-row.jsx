import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Prow extends PureComponent {
  static propTypes = {
    product: PropTypes.shape({
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }

  render () {
    const { price, stocked, name } = this.props.product
    return (
      <tr>
        <td style={{ color: stocked ? 'red' : '' }}>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}
