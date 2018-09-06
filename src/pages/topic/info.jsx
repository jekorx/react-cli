import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'antd-mobile'
import styles from '@styles/topic'
import { getTimeInfo, checkLogin } from '@utils'
import $http from '@api'
import { types } from '@components/tag'

class Info extends PureComponent {
  static propTypes = {
    topic: PropTypes.object.isRequired,
    atk: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    isCollect: false
  }
  componentDidMount () {
    this.setState({
      isCollect: this.props.topic.is_collect
    })
  }
  handleCollect = () => {
    const { topic: { id }, atk, history, location } = this.props
    // 检查是否登录
    if (!checkLogin(atk, history, location)) return
    const { isCollect } = this.state
    $http.post(`topic_collect/${isCollect ? 'de_collect ' : 'collect '}`, {
      accesstoken: atk,
      topic_id: id
    }).then(({ success }) => {
      if (success) {
        this.setState({
          isCollect: !isCollect
        })
      }
    })
  }
  render () {
    const { topic } = this.props
    const { isCollect } = this.state
    return (
      <section className={styles.info}>
        <Link to={`/user/${topic.author_id}`}>
          <span
            className={styles.avatar}
            style={{ backgroundImage: `url(${topic.author.avatar_url})` }}
          />
        </Link>
        <div className={styles.center}>
          <span>{topic.author.loginname} · 发表于 {getTimeInfo(topic.create_at)} · 来自 {types[topic.tab]}</span>
          <span>{topic.visit_count} 次浏览</span>
        </div>
        <div className={styles['collect-wrap']}>
          <Button
            className={styles.collect}
            onClick={this.handleCollect}
            type={isCollect ? 'ghost' : 'primary'}
          >{isCollect ? '取消收藏' : '收藏'}</Button>
        </div>
      </section>
    )
  }
}

export default withRouter(Info)