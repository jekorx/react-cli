import { observable, action, computed } from 'mobx'
import menuData from '@src/json/menu'
import notInMenuData from '@src/json/not.in.menu'

export default class GV {
  constructor () {
    const { pathname } = window.location
    this.path = pathname.substr(pathname.lastIndexOf('/'))
  }
  // 路由，菜单中显示的和不在菜单中显示的
  routes = [...menuData, ...notInMenuData].filter(r => r.path)
  // 菜单
  menu = menuData
  // url path
  @observable path = ''
  // 左侧抽屉菜单状态
  @observable drawer = false

  // 标题
  @computed get title () {
    let obj = this.routes.find(r => r.path === this.path)
    return obj ? obj.title : '全部'
  }
  // 设置抽屉菜单状态切换
  @action.bound drawerChange () {
    this.drawer = !this.drawer
  }
  // 设置路径
  @action.bound setPath (path) {
    this.path = '/' + path
  }
}
