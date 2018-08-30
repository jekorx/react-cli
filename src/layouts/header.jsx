import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Logo from './logo'

@inject('_GV_')
@observer
export default class Header extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }
  render () {
    const { title } = this.props._GV_
    return (
      <Fragment>
        <Logo />
        <span style={{ paddingRight: 45 }}>{title}</span>
      </Fragment>
    )
  }
}
