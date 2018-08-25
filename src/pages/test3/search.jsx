import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('products')
@observer
export default class Search extends Component {
  static propTypes = {
    products: PropTypes.shape({
      keyword: PropTypes.string.isRequired,
      isStock: PropTypes.bool.isRequired,
      setSearch: PropTypes.func.isRequired,
      setStock: PropTypes.func.isRequired
    }).isRequired
  }

  handleFormChange = ({ target }) => {
    const { setSearch, setStock } = this.props.products
    let type = target.type
    if (type === 'checkbox') {
      setStock(target.checked)
    } else {
      setSearch(target.value)
    }
  }

  render () {
    const { keyword, isStock } = this.props.products
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={this.handleFormChange}
        />
        <p>
          <input
            type="checkbox"
            checked={isStock}
            onChange={this.handleFormChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}
