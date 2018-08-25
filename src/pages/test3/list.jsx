import React, { Component } from 'react'
import { inject, observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import PropTypes from 'prop-types'
import Crow from './c-row'
import Prow from './p-row'

@inject('products')
@observer
export default class List extends Component {
  static propTypes = {
    products: PropTypes.shape({
      filter: ObservablePropTypes.arrayOrObservableArrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stocked: PropTypes.bool.isRequired
      })).isRequired
    }).isRequired
  }

  render () {
    const { filter } = this.props.products
    const row = []
    let lastCategory = ''
    filter.forEach(p => {
      if (p.category !== lastCategory) {
        row.push(<Crow category={p.category} key={p.category} />)
      }
      row.push(<Prow product={p} key={p.name} />)
      lastCategory = p.category
    })
    return row
  }
}
