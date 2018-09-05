import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ListView } from 'antd-mobile'
import Replay from './replay'

export default class Comment extends Component {
  static propTypes = {
    replies: PropTypes.array,
    count: PropTypes.number
  }
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }) // listview数据源
  }
  componentDidMount () {
    console.log(this.props.replies)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.replies || [])
    })
  }
  render () {
    const { count } = this.props
    const { dataSource } = this.state
    return (
      <Fragment>
        <h3>
          <strong>{count}</strong>
          回复
        </h3>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <Replay key={rowData.id} data={rowData} />}
          // style={{ height, overflow: 'auto' }}
          pageSize={7}
          scrollRenderAheadDistance={200}
        />
      </Fragment>
    )
  }
}
