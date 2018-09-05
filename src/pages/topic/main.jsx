import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { ListView, PullToRefresh } from 'antd-mobile'
import $http from '@api'
import BackTop from '@components/backtop'
import Content from './content'
import Replay from './replay'

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
    showBackTop: false,
    refreshing: false,
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }), // listview数据源
    pageSize: 7, // 每次渲染条数
    height: (document.documentElement.clientHeight || document.body.clientHeight) - 45
  }
  componentDidMount () {
    this.queryData()
    // this.topicRef.addEventListener('scroll', this.handleScroll, true)
  }
  /* componentWillUnmount () {
    this.topicRef.removeEventListener('scroll', this.handleScroll)
  } */
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
        topic: data,
        refreshing: false,
        dataSource: this.state.dataSource.cloneWithRows(data.replies || [])
      })
    }
  }
  /* // 过渡滚动到顶部
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
  render () {
    const { topic, showBackTop, dataSource, height, pageSize, refreshing } = this.state
    return (
      <Fragment>
        <ListView
          ref={e => { this.listViewRef = e }}
          dataSource={dataSource}
          renderHeader={() => <Content topic={topic} />}
          renderRow={rowData => <Replay key={rowData.id} data={rowData} />}
          style={{ height, overflow: 'auto' }}
          pageSize={pageSize}
          pullToRefresh={<PullToRefresh refreshing={refreshing} onRefresh={this.handleRefresh} />}
          onScroll={this.handleScroll}
          scrollEventThrottle={800}
          scrollRenderAheadDistance={200}
        />
        <BackTop
          show={showBackTop}
          handleClick={this.handleBackTop}
        />
      </Fragment>
    )
  }
}
