import { observable, action } from 'mobx'

export default class User {
  constructor () {
    // 初始化时获取cookie中保存的用户信息，加载到mobx
    let name = '__UTOKEN__'
    let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    let arr = document.cookie.match(reg)
    let val
    if (arr && arr.length > 2) {
      val = arr[2]
      val = JSON.parse(unescape(val))
      this.setUserInfo(val)
    }
  }

  // 用户信息
  @observable id = ''
  @observable name = ''
  @observable avatar = ''
  @observable isLogin = false

  // 设置用户信息，保存到cookie
  @action.bound setUserInfo ({ id, name, avatar, isLogin }) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.isLogin = isLogin
    let info = { id, name, avatar, isLogin }
    info = escape(JSON.stringify(info))
    document.cookie = `__UTOKEN__=${info}`
  }
  // 清空用户信息，包括cookie
  @action.bound clearUserInfo () {
    this.id = ''
    this.name = ''
    this.avatar = ''
    this.isLogin = false
    let name = '__UTOKEN__'
    let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    let arr = document.cookie.match(reg)
    let val
    if (arr && arr.length > 2) {
      val = arr[2]
    }
    if (val) {
      let exp = new Date()
      exp.setTime(exp.getTime() - 1)
      document.cookie = `__UTOKEN__=${val};expires=${exp.toGMTString()}`
    }
  }
}
