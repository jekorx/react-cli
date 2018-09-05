import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import InnerHTML from './innerhtml'
import styles from '@styles/topic'
import Icon from '@components/icon'
import { getTimeInfo } from '@utils'
import $http from '@api'

@inject('user')
@observer
export default class Replay extends Component {
  static propTypes = {
    data: PropTypes.object,
    user: PropTypes.shape({
      accessToken: PropTypes.string.isRequired
    }).isRequired
  }
  state = {
    up: false,
    count: 0
  }
  handleUp = () => {
    const { data: { id }, user: { accessToken } } = this.props
    $http.post(`reply/${id}/ups `, {
      accesstoken: accessToken
    }).then(({ success, action }) => {
      if (success) {
        this.setState({
          up: action === 'up',
          count: action === 'up' ? 1 : 0
        })
      }
    })
  }
  handleReply = () => {

  }
  render () {
    const { data } = this.props
    const { up, count } = this.state
    const getType = () => {
      if (up) return 'uped'
      if (data.is_uped) return 'uped'
      return 'up'
    }
    return (
      <div className={styles.reply}>
        <section className={styles.user}>
          <Link to={`/user/${data.author.loginname}`}>
            <span
              className={styles.avatar}
              style={{ backgroundImage: `url(${data.author.avatar_url})` }}
            />
          </Link>
          <div className={styles['reply-info']}>
            <span className={styles['reply-left']}>
              <span className={styles['reply-name']}>{data.author.loginname}</span>
              <span>发表于：{getTimeInfo(data.create_at)}</span>
            </span>
            <span className={styles['reply-right']}>
              <Icon
                type={getType()}
                color="#333"
                onClick={this.handleUp}
              />
              <span className={styles['up-count']}>{data.ups.length + count}</span>
              <Icon type="reply" color="#333" onClick={this.handleReply} />
            </span>
          </div>
        </section>
        <InnerHTML cnt={data.content} />
      </div>
    )
  }
}
