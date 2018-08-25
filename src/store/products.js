import { observable, computed, action } from 'mobx'

export default class Products {
  @observable list = []

  @observable keyword = ''

  @observable isStock = false

  @computed get filter () {
    return this.list.filter(p => {
      if (p.name.includes(this.keyword)) {
        if (this.isStock) return p.stocked
        return true
      }
      return false
    })
  }

  @action.bound setSearch (word) {
    this.keyword = word
  }

  @action.bound setStock (isStock) {
    this.isStock = isStock
  }

  @action.bound setProducts (products) {
    this.list = products
  }
}
