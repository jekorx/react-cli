import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
        <NameTd stocked={stocked}>{name}</NameTd>
        <td>{price}</td>
      </tr>
    )
  }
}

const NameTd = styled.td`
  ${props => props.stocked && `
    color: red
  `}
`
