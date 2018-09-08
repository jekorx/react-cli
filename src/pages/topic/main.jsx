import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { ListView, PullToRefresh } from 'antd-mobile'
import $http from '@api'
import BackTop from '@components/backtop'
import indicator from '@components/indicator'
import { checkLogin } from '@utils'
import Content from './content'
import Reply from './reply'

@inject('_GV_', 'user')
@observer
class Main extends Component {
  constructor (props) {
    super(props)
    this.queryData = this.queryData.bind(this)
  }
  static propTypes = {
    _GV_: PropTypes.shape({
      setTitle: PropTypes.func.isRequired,
      headerHeight: PropTypes.number.isRequired
    }).isRequired,
    user: PropTypes.shape({
      accessToken: PropTypes.string.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired
    }).isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    topic: {},
    showBackTop: false,
    refreshing: false,
    list: [],
    dataSource: new ListView.DataSource({
      // 当id改变时表示该行数据发生变化
      rowHasChanged: (row1, row2) => (row1.id !== row2.id) || (row1.showComment !== row2.showComment)
    }), // listview数据源
    pageSize: 14, // 每次渲染条数
    height: 0
  }
  componentDidMount () {
    const { headerHeight } = this.props._GV_
    this.setState({
      height: (document.documentElement.clientHeight || document.body.clientHeight) - headerHeight
    })
    this.queryData()
  }
  // 加载数据
  async queryData () {
    const {
      match: { params },
      _GV_: { setTitle },
      user: { accessToken }
    } = this.props
    setTitle({ title: '' })
    let { success, data } = await $http.get(`topic/${params.id}?accesstoken=${accessToken}`)
    if (success) {
      this.setState({
        topic: data,
        refreshing: false,
        list: data.replies,
        dataSource: this.state.dataSource.cloneWithRows(data.replies || [])
      })
    }
  }
  /* componentDidMount () {
    this.topicRef.addEventListener('scroll', this.handleScroll, true)
  }
  componentWillUnmount () {
    this.topicRef.removeEventListener('scroll', this.handleScroll)
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
  } */
  // 滚动事件，控制返回顶部按钮显示隐藏
  handleScroll = e => {
    this.setState({
      showBackTop: e.target.scrollTop > 200
    })
  }
  // 返回顶部
  handleBackTop = () => {
    this.setState({
      showBackTop: false
    }, () => {
      this.listViewRef.scrollTo(0)
    })
  }
  // 下拉刷新
  handleRefresh = () => {
    this.setState({
      refreshing: true
    }, this.queryData)
  }
  // 回复处理，rowId为-1时表示隐藏回复窗口
  handleReply = rowId => {
    const { user: { accessToken }, history } = this.props
    // 检查是否登录
    if (!checkLogin(accessToken, history)) return
    let list = this.state.list.map((t, idx) => Object.assign({}, t, {
      showComment: idx === +rowId
    }))
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(list)
    })
  }
  render () {
    const { topic, showBackTop, dataSource, height, pageSize, refreshing } = this.state
    const { accessToken } = this.props.user
    return (
      <Fragment>
        <ListView
          ref={e => { this.listViewRef = e }}
          dataSource={dataSource}
          pageSize={pageSize}
          style={{ height, overflow: 'auto' }}
          onScroll={this.handleScroll}
          scrollEventThrottle={800}
          scrollRenderAheadDistance={400}
          pullToRefresh={
            <PullToRefresh
              refreshing={refreshing}
              onRefresh={this.handleRefresh}
              indicator={indicator}
            />
          }
          renderHeader={() =>
            <Content
              topic={topic}
              atk={accessToken}
            />
          }
          renderRow={(rowData, sectionID, rowID) =>
            <Reply
              key={rowData.id}
              rowId={+rowID}
              data={rowData}
              atk={accessToken}
              topicId={topic.id}
              author={topic.author && topic.author.loginname}
              handleSucc={this.queryData}
              handleReply={() => this.handleReply(rowID)}
              handleCancel={() => this.handleReply(-1)}
            />
          }
        />
        <BackTop
          show={showBackTop}
          handleClick={this.handleBackTop}
        />
      </Fragment>
    )
  }
}

export default withRouter(Main)
