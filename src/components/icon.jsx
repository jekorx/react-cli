import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    clsName: PropTypes.string,
    onClick: PropTypes.func
  }
  render () {
    const { color, type, size, clsName, onClick } = this.props
    return (
      <i
        style={{
          fontSize: size && +size,
          color
        }}
        onClick={onClick}
        className={['iconfont', `icon-${type}`, clsName].join(' ')}
      ></i>
    )
  }
}
