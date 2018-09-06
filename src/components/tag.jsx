import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '@styles/components'
import types from '@src/json/types'

export default class Item extends PureComponent {
  static propTypes = {
    good: PropTypes.bool,
    top: PropTypes.bool,
    tab: PropTypes.string,
    clsName: PropTypes.string
  }
  render () {
    const { good, top, tab, clsName } = this.props
    let type = tab
    if (top) type = 'top'
    if (good) type = 'good'
    return (
      <span
        className={[
          styles.tag,
          clsName,
          (top || good) ? styles['tab-hightlight'] : ''
        ].join(' ')}
      >{types[type]}</span>
    )
  }
}
