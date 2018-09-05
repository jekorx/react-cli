import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('_GV_')
@observer
export default class Main extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      setTitle: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }
  componentDidMount () {
    const { pathname } = this.props.location
    this.props._GV_.setTitle({ path: pathname })
  }
  render () {
    return (
      <div>User</div>
    )
  }
}
