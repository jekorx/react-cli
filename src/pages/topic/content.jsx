import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from '@components/tag'
import Info from './info'
import styles from '@styles/topic'
import InnerHTML from './innerhtml'

export default class Content extends Component {
  static propTypes = {
    topic: PropTypes.object,
    atk: PropTypes.string.isRequired
  }
  render () {
    const { topic, atk } = this.props
    return (
      <div className={styles.topic}>
        <h2 className={styles.title}>
          {(topic.good || topic.top) && <span className={styles['tag-wrap']}>
            <Tag
              good={topic.good}
              top={topic.top}
              tab={topic.tab}
              clsName={styles.tag}
            />
          </span>}
          {topic.title}
        </h2>
        {topic.author && <Info topic={topic} atk={atk} />}
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
