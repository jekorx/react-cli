import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import InnerHTML from './innerhtml'
import styles from '@styles/topic'
import Icon from '@components/icon'
import { getTimeInfo, checkLogin } from '@utils'
import $http from '@api'

class Replay extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    atk: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    uped: false,
    count: 0
  }
  componentDidMount () {
    this.setState({
      uped: this.props.data.is_uped
    })
  }
  handleUp = () => {
    const { data: { id, is_uped: isUped }, atk, history } = this.props
    // 检查是否登录
    if (!checkLogin(atk, history)) return
    $http.post(`reply/${id}/ups `, {
      accesstoken: atk
    }).then(({ success, action }) => {
      if (success) {
        this.setState({
          uped: action === 'up',
          count: isUped ? (action === 'down' ? -1 : 0) : (action === 'up' ? 1 : 0)
        })
      }
    })
  }
  handleReply = () => {
    const { data: { id }, atk, history } = this.props
    // 检查是否登录
    if (!checkLogin(atk, history)) return
    console.log(id)
  }
  render () {
    const { data } = this.props
    const { uped, count } = this.state
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
                type={uped ? 'uped' : 'up'}
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

export default withRouter(Replay)
