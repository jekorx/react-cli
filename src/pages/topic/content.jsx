import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd-mobile'
import Tag from '@components/tag'
import Info from './info'
import styles from '@styles/topic'
import InnerHTML from '@components/innerhtml'
import Comment from './comment'

export default class Content extends Component {
  static propTypes = {
    topic: PropTypes.object,
    atk: PropTypes.string
  }
  state = {
    showComment: false
  }
  handleToggleReply = () => {
    this.setState({
      showComment: !this.state.showComment
    })
  }
  render () {
    const { topic, atk } = this.props
    const { showComment } = this.state
    return (
      <div className={styles.topic}>
        <h2 className={styles.title}>
          {(topic.good || topic.top) && <span className={styles['tag-wrap']}>
            <Tag
              good={topic.good}
              top={topic.top}
              tab={topic.tab}
              className={styles.tag}
            />
          </span>}
          {topic.title}
        </h2>
        {topic.author && <Info topic={topic} atk={atk} />}
        <InnerHTML cnt={topic.content} />
        <h3 className={styles['reply-header']}>
          <strong>
            <span className={styles['reply-count']}>{topic.reply_count}</span>
            回复
          </strong>
          <Button
            inline
            size="small"
            type="ghost"
            className={styles['reply-add']}
            onClick={this.handleToggleReply}
          >{showComment ? '取消' : '添加回复'}</Button>
        </h3>
        <div style={{ display: showComment ? 'block' : 'none' }}>
          <Comment atk={atk} topicId={topic.id} />
        </div>
      </div>
    )
  }
}
