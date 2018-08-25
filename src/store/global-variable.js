import { observable, action, computed } from 'mobx'

// 防抖函数
const debounce = (fn, delay = 800) => {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => fn && fn(), delay)
  }
}
// menuData
function queryData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(require('@src/json/menu'))
    }, 1000)
  })
}
// 全局变量
export default class GlobalVariable {
  constructor () {
    let name = '__UTOKEN__'
    let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    let arr = document.cookie.match(reg)
    let val
    if (arr && arr.length > 2) {
      val = arr[2]
      this.setUserInfo({
        token: val,
        userName: 'admin1',
        isLogin: true
      })
    }
    this.initMenu()
    this.setSize()
    window.onresize = debounce(this.setSize)
  }
  // 窗口尺寸
  @observable width = 0
  @observable height = 0
  // 折叠菜单
  @observable collapsed = false
  // header高度
  @observable headerHeight = 64
  // 菜单宽度
  @observable menuWidth = 200
  // 菜单
  @observable menu = []
  // 登录状态
  @observable userInfo = null

  /* 计算属性 start */
  // 菜单高度
  @computed get menuHeight () {
    return this.height - this.headerHeight
  }
  // 内容区高度
  @computed get cntHeight () {
    return this.menuHeight
  }
  // 内容区宽度
  @computed get cntWidth () {
    return this.width - this.menuWidth
  }
  /* 计算属性 end */

  /* action方法 start */
  // 屏幕尺寸变化
  @action.bound setSize () {
    this.width = document.documentElement.clientWidth || document.body.clientWidth
    this.height = document.documentElement.clientHeight || document.body.clientHeight
    this.collapsed = this.width < 800
    this.menuWidth = this.collapsed ? 80 : 200
  }
  // 菜单折叠
  @action.bound toggle () {
    this.collapsed = !this.collapsed
  }
  // 加载菜单
  @action.bound async initMenu () {
    let menu = await queryData()
    this.menu = menu
  }
  // 设置用户信息
  @action.bound setUserInfo (userInfo) {
    this.userInfo = userInfo
  }
  /* action方法 end */
}
