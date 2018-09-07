import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class InnerHTML extends PureComponent {
  static propTypes = {
    cnt: PropTypes.string
  }
  render () {
    const { cnt } = this.props
    return (
      <section
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: cnt
        }}
      ></section>
    )
  }
}
