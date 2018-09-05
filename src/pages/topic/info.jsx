import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Tag from '@components/tag'
import styles from '@styles/topic'
import { getTimeInfo } from '@utils'

export default class Info extends Component {
  static propTypes = {
    topic: PropTypes.object.isRequired
  }
  render () {
    const { topic } = this.props
    return (
      <section className={styles.info}>
        <Link to={`/user/${topic.author_id}`}>
          <span
            className={styles.avatar}
            style={{ backgroundImage: `url(${topic.author.avatar_url})` }}
          />
        </Link>
        <div className={styles.center}>
          <span>{topic.author.loginname}</span>
          <span>发表于{getTimeInfo(topic.create_at)}</span>
        </div>
        <div className={styles.right}>
          <span className={styles['tag-wrap']}>
            <Tag
              good={topic.good}
              top={topic.top}
              tab={topic.tab}
              clsName={styles.tag}
            />
          </span>
          <span>{topic.visit_count}次浏览</span>
        </div>
      </section>
    )
  }
}
