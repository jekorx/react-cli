import React, { Component } from 'react'
import { Upload, Icon, Button, message } from 'antd'
import $http from '@api'

export default class Main extends Component {
  state = {
    upload: {
      name: 'files', // 接受文件的字段名
      action: `${$http.defaults.baseURL}app/v1/upload`,
      data: {
        num: 123,
        name: 'aa'
      },
      multiple: true,
      onChange (info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
  }

  render () {
    const { upload } = this.state
    return (
      <Upload {...upload}>
        <Button>
          <Icon type="upload" /> 点击上传
        </Button>
      </Upload>
    )
  }
}
