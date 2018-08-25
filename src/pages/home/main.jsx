import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, Button } from 'antd'
import $http from '@api'

const Column = Table.Column

@inject('_GV_')
@observer
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.list = this.list.bind(this)
  }

  static propTypes = {
    _GV_: PropTypes.shape({
      cntHeight: PropTypes.number.isRequired
    }).isRequired
  }

  state = {
    tableData: [],
    pageNo: 1,
    pageSize: 10,
    total: 0
  }

  handleAdd = () => {
    $http.post('app/v1/person', {
      name: '11',
      age: 22
    }).then(res => console.log(res))
  }

  handleGet = () => {
    this.list(this.state.pageNo, this.state.pageSize)
  }

  async list (pageNo, pageSize) {
    try {
      let { data, code } = await $http.get(`app/v1/person/${pageNo}/${pageSize}`)
      if (code === 0) {
        this.setState({
          pageNo: data.number + 1,
          pageSize: data.size,
          tableData: data.content,
          total: data.totalElements
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { tableData, pageNo, pageSize, total } = this.state
    const { cntHeight } = this.props._GV_
    return (
      <Fragment>
        <ButtonWrapper>
          <Button type="primary" onClick={this.handleAdd}>add</Button>
          <Button type="primary" onClick={this.handleGet}>get</Button>
        </ButtonWrapper>
        <Table
          bordered
          rowKey="id"
          dataSource={tableData}
          pagination={{
            showSizeChanger: true,
            onChange: this.list,
            onShowSizeChange: this.list,
            current: pageNo,
            pageSize,
            total,
            showTotal: total => `总共 ${total} 条`
          }}
          scroll={{ x: 700, y: cntHeight - 184 }}
        >
          <Column title="Index" key="index" align="center" width={80} render={(text, record, index) => {
            return (pageNo - 1) * pageSize + index + 1
          }} />
          <Column title="Name" dataIndex="name" width={160} />
          <Column title="Sex" dataIndex="sex" width={160} />
          <Column title="Age" dataIndex="age" width={160} />
          <Column title="CreateTime" dataIndex="createTime" width={160} />
          <Column title=" " />
        </Table>
      </Fragment>
    )
  }
}

const ButtonWrapper = styled.div`
  padding-bottom: 16px;
  text-align: right;
  button {
    margin-left: 16px
  }
`
