import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import $http from '@api'
import styles from '@styles/topic'
import Info from './info'
import BackTop from '@components/backtop'

@inject('_GV_')
@observer
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.queryData = this.queryData.bind(this)
  }
  static propTypes = {
    _GV_: PropTypes.shape({
      setTitle: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }
  state = {
    topic: {},
    showBackTop: false
  }
  componentDidMount () {
    this.queryData()
    this.topicRef.addEventListener('scroll', this.handleScroll, true)
  }
  componentWillUnmount () {
    this.topicRef.removeEventListener('scroll', this.handleScroll)
  }
  // 加载数据
  async queryData () {
    const {
      match: { params },
      _GV_: { setTitle }
    } = this.props
    setTitle({ title: '' })
    let { success, data } = await $http.get(`topic/${params.id}?mdrender=true`)
    if (success) {
      this.setState({
        topic: data
      })
    }
  }
  // 滚动事件，控制返回顶部按钮是否可用
  handleScroll = e => {
    this.setState({
      showBackTop: e.target.scrollTop > 200
    })
  }
  // 过渡滚动到顶部
  handleBackTop = () => {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      const now = this.topicRef.scrollTop
      if (now === 0) {
        clearInterval(this.timer)
        return
      }
      const speed = Math.floor(-now / 10)
      this.topicRef.scrollTop = now + speed
    }, 15)
  }
  render () {
    const { topic, showBackTop } = this.state
    const createHtml = () => {
      return {
        __html: topic.content
      }
    }
    return (
      <Fragment>
        <div className={styles.topic} ref={e => { this.topicRef = e }}>
          <h2 className={styles.title}>{topic.title}</h2>
          {topic.author && <Info topic={topic} />}
          <section className="markdown-body" dangerouslySetInnerHTML={createHtml()}></section>
        </div>
        <BackTop
          show={showBackTop}
          handleClick={this.handleBackTop}
        />
      </Fragment>
    )
  }
}
