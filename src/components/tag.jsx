import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '@styles/components'

const types = {
  good: '精华',
  top: '置顶',
  ask: '问答',
  share: '分享',
  job: '招聘',
  dev: '客户端测试'
}

export default class Item extends PureComponent {
  static propTypes = {
    good: PropTypes.bool.isRequired,
    top: PropTypes.bool.isRequired,
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
