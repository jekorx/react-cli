import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { PullToRefresh, ListView } from 'antd-mobile'
import Item from './item'
import Footer from './footer'
import $http from '@api'

@inject('_GV_')
@observer
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.queryData = this.queryData.bind(this)
  }
  static propTypes = {
    _GV_: PropTypes.shape({
      setPath: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }), // listview数据源
    list: [], // 加载后数据存放
    loading: true,
    refreshing: false,
    hasMore: true,
    pageNo: 1,
    pageSize: 7,
    tab: '',
    height: (document.documentElement.clientHeight || document.body.clientHeight) - 45
  }
  // 首次加载根据类型请求数据
  componentDidMount () {
    const { pathname } = this.props.location
    const tab = pathname.substr(1) || 'all'
    this.props._GV_.setPath(tab)
    this.setState({ tab }, () => {
      this.queryData()
    })
  }
  // 获取数据
  async queryData () {
    this.setState({
      loading: true
    })
    const { pageNo, pageSize, tab } = this.state
    let { success, data } = await $http.get(`topics?tab=${tab}&page=${pageNo}&limit=${pageSize}&mdrender=false`)
    if (success && data) {
      if (data.length > 0) {
        let list = [...this.state.list, ...data]
        const { dataSource, pageNo } = this.state
        this.setState({
          dataSource: dataSource.cloneWithRows(list),
          list,
          pageNo: pageNo + 1,
          loading: false,
          refreshing: false
        })
      } else {
        this.setState({
          loading: false,
          hasMore: false,
          refreshing: false
        })
      }
    }
  }
  // 加载更多
  handleEndReached = () => {
    const { loading, hasMore } = this.state
    if (loading && !hasMore) {
      return
    }
    this.queryData()
  }
  // 下拉刷新
  handleRefresh = () => {
    this.setState({
      list: [],
      pageNo: 1,
      refreshing: true
    }, this.queryData)
  }

  render () {
    const { dataSource, loading, refreshing, pageSize, height } = this.state
    return (
      <ListView
        dataSource={dataSource}
        renderFooter={() => <Footer loading={loading} />}
        renderRow={rowData => <Item key={rowData.id} data={rowData} />}
        pageSize={pageSize}
        style={{ height, overflow: 'auto' }}
        pullToRefresh={<PullToRefresh refreshing={refreshing} onRefresh={this.handleRefresh} />}
        scrollRenderAheadDistance={100}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
}