import { observable, computed, action } from 'mobx'

class Todo {
  id = Math.random()
  @observable content = ''
  @observable finished = false

  constructor (content) {
    this.content = content
  }

  @action.bound toggle () {
    this.finished = !this.finished
  }
}

export default class Todos {
  @observable list = []

  @computed get left () {
    return this.list.filter(item => !item.finished).length
  }

  @action.bound add (content) {
    this.list.unshift(new Todo(content))
  }

  @action.bound remove (todo) {
    this.list.remove(todo)
  }
}
