import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Info from './info'
import styles from '@styles/topic'
import InnerHTML from './innerhtml'

export default class Content extends Component {
  static propTypes = {
    topic: PropTypes.object
  }
  render () {
    const { topic } = this.props
    return (
      <div className={styles.topic}>
        <h2 className={styles.title}>{topic.title}</h2>
        {topic.author && <Info topic={topic} />}
        <InnerHTML cnt={topic.content} />
        <h3 className={styles['reply-header']}>
          <strong
            className={styles['reply-count']}
          >{topic.reply_count} </strong>
          回复
        </h3>
      </div>
    )
  }
}
