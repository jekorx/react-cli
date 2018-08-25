import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Search from './search'
import Table from './table'

const dftList = [
  {
    category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'
  }, {
    category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'
  }, {
    category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'
  }, {
    category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'
  }, {
    category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'
  }, {
    category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'
  }
]

@inject('products')
@observer
export default class Main extends Component {
  static propTypes = {
    products: PropTypes.shape({
      setProducts: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    this.initData()
  }

  async initData () {
    let list = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dftList)
      }, 1000)
    })
    const { setProducts } = this.props.products
    setProducts(list)
  }

  render () {
    return (
      <div>
        <Search />
        <Table />
      </div>
    )
  }
}
