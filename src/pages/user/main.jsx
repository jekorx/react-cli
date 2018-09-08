import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import $http from '@api'
import BackTop from '@components/backtop'
import styles from '@styles/user'
import { throttle } from '@utils'
import Info from './info'
import Relevant from './relevant'

@inject('_GV_')
@observer
class Main extends Component {
  static propTypes = {
    _GV_: PropTypes.shape({
      setTitle: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired
    }).isRequired
  }
  state = {
    showBackTop: false,
    replies: [],
    topics: [],
    info: {}
  }
  componentDidMount () {
    const { params } = this.props.match
    const { name } = params
    this.props._GV_.setTitle({ title: `@${name} 的个人主页` })
    this.queryData(name)
    this.handleScroll = throttle(() => {
      this.setState({
        showBackTop: this.userRef.scrollTop > 200
      })
    })
    this.userRef.addEventListener('scroll', this.handleScroll, true)
  }
  componentWillUnmount () {
    this.userRef.removeEventListener('scroll', this.handleScroll)
  }
  // 过渡滚动到顶部
  handleBackTop = () => {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      const now = this.userRef.scrollTop
      if (now === 0) {
        clearInterval(this.timer)
        return
      }
      const speed = Math.floor(-now / 5)
      this.userRef.scrollTop = now + speed
    }, 15)
  }
  queryData = name => {
    $http.get(`user/${name}`).then(({ success, data }) => {
      if (success) {
        this.setState({
          replies: data.recent_replies,
          topics: data.recent_topics,
          info: {
            avatarUrl: data.avatar_url,
            createAt: data.create_at,
            githubUsername: data.githubUsername,
            loginname: data.loginname,
            score: data.score
          }
        })
      }
    })
  }
  render () {
    const { info, topics, replies, showBackTop } = this.state
    return (
      <div
        className={styles.wrap}
        ref={e => { this.userRef = e }}
      >
        <Info info={info}/>
        <Relevant
          title="最近创建的话题"
          data={topics}
        />
        <Relevant
          title="最近参与的话题"
          data={replies}
        />
        <BackTop
          show={showBackTop}
          handleClick={this.handleBackTop}
        />
      </div>
    )
  }
}

export default withRouter(Main)
