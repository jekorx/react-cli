import React, { PureComponent, Fragment } from 'react'
import $http from '@api'
import styles from '@styles/todos'

export default class Index extends PureComponent {
  constructor (props) {
    super(props)
    this.handleGet = this.handleGet.bind(this)
  }
  // refs
  formRef = React.createRef()

  state = {
    username: 'admin1',
    password: 'admin'
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  // login
  handleLogin = () => {
    $http.post('sign/v1/appIn', {
      login: this.state.username,
      pwd: this.state.password
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
        document.cookie = `__UTOKEN__=${res.data}`
        console.log('Set cookie success！')
        /* this.setState({
          username: '',
          password: ''
        }) */
      }
    })
  }

  handleDelCookie = () => {
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
      console.log('Clear cookie success!')
    }
  }
  // 上传
  handleFileChange = ({ target }) => {
    let files = target.files
    let formData = new FormData()
    formData.append('num', 123)
    formData.append('name', 'aa')
    formData.append('file', files[0])
    for (let f of files) {
      formData.append('files', f)
    }
    $http.post('app/v1/upload', formData, {
      // 覆盖默认设置中的transformRequest设置
      transformRequest: [(params, headers) => {
        // 请求头Content-Type 为multipart/form-data
        headers = { 'Content-Type': 'multipart/form-data' }
        // 取消qs参数转换
        return params
      }],
      // 上传进度
      onUploadProgress ({ loaded, total }) {
        let p = (loaded / total * 100).toFixed(0) + '%'
        console.log(p)
      }
    }).then(res => {
      console.log(res)
      res.code === 0 && this.formRef.current.reset()
    })
  }

  handleAdd = () => {
    $http.post('app/v1/person', {
      name: '11',
      age: 22
    }).then(res => console.log(res))
  }

  async handleGet () {
    try {
      let list1 = await this.list()
      let list2 = await $http.get('app/v1/person/2/10')
      console.log(list2.data.size, list1.data.size)
    } catch (error) {
      console.log(error)
    }
  }

  list = () => {
    // return Promise.reject(new Error('Just an error!'))
    return $http.get('app/v1/person/1/5')
  }

  render () {
    return (
      <Fragment>
        <div className={styles.test}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleLogin}>login</button>
          <button onClick={this.handleDelCookie}>clear Cookie</button>
        </div>
        <form ref={this.formRef}>
          <input
            multiple
            type="file"
            onChange={this.handleFileChange}
          />
        </form>
        <div>
          <button onClick={this.handleAdd}>add</button>
          <button onClick={this.handleGet}>get</button>
        </div>
      </Fragment>
    )
  }
}
