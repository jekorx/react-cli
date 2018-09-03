import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('_GV_')
@observer
export default class Main extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      setTitle: PropTypes.func.isRequired
    }).isRequired
  }
  componentDidMount () {
    this.props._GV_.setTitle({ path: '/message' })
  }
  render () {
    return (
      <div>message</div>
    )
  }
}
