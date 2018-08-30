import { observable, action } from 'mobx'

export default class User {
  @observable id = ''
  @observable name = ''
  @observable avatar = ''
  @observable isLogin = false

  @action.bound setUserInfo ({ id, name, avatar, isLogin }) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.isLogin = isLogin
  }
}
