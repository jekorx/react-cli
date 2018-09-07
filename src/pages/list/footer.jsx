import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '@styles/list'

export default class Footer extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }
  render () {
    const { loading } = this.props
    return (
      <div className={styles.loading}>
        {loading ? '加载中...' : ''}
      </div>
    )
  }
}
