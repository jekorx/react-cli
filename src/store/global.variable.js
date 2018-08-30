import { observable, action } from 'mobx'

export default class GV {
  @observable title = '全部'

  @action.bound setTitle (title) {
    this.title = title
  }
}
