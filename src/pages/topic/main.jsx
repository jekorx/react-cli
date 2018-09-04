import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import $http from '@api'

@inject('_GV_')
@observer
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.queryData = this.queryData.bind(this)
  }
  static propTypes = {
    _GV_: PropTypes.shape({
      setTitle: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }
  componentDidMount () {
    this.queryData()
  }
  async queryData () {
    const {
      match: { params },
      _GV_: { setTitle }
    } = this.props
    setTitle({ title: '' })
    let { success, data } = await $http.get(`topic/${params.id}`)
    if (success) {
      console.log(data)
    }
  }
  render () {
    return (
      <div>topic</div>
    )
  }
}
