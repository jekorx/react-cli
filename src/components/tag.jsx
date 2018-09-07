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
    let type = types[tab]
    if (top) type = '置顶'
    if (good) type = '精华'
    return (
      <span
        className={[
          styles.tag,
          clsName,
          (top || good) ? styles['tab-hightlight'] : ''
        ].join(' ')}
      >{type}</span>
    )
  }
}
