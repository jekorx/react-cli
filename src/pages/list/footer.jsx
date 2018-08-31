import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }
  render () {
    const { loading } = this.props
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        {loading ? 'Loading...' : 'Loaded'}
      </div>
    )
  }
}
