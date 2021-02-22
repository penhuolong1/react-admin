import React, { Component } from 'react';
import { Modal, message } from 'antd'
import JSONForm from '@/components/JSONForm'
import { editItem } from '@/api/table.js'


class editForm extends Component {
  handleOk = () => {

  }
  handleCancel = () => {

  }
  submit = (val) => {
    console.log(val)
    const params = {
      ...val,
      id: this.props.initialValues.id,
      star: "".padStart(val['star'], '★'),
      date: val['date'].format('YYYY-MM-DD HH:mm:ss')
    }
    return new Promise(resolve => {
      editItem(params).then(({state, msg}) => {
        if (state === 0) {
          message.success(msg)
          this.props.cancel()
          this.props.submit()
        }
        resolve()
      })
    })
  }
  render() {
    const formInfoList = [
      {
        name: 'title',
        type: 'Input',
        label: '标题',
        rules: [
          {
            required: true,
            message: '请输入标题',
          }
        ]
      },
      {
        name: 'author',
        type: 'Input',
        label: '作者',
        config: {
          disabled: true
        }
      },
      {
        name: 'readings',
        type: 'Input',
        label: '阅读量',
        config: {
          disabled: true
        }
      },
      {
        name: 'status',
        type: 'Select',
        label: '状态',
        data: [
          {
            value: 'published',
            text: 'published'
          },
          {
            value: 'draft',
            text: 'draft'
          }
        ],
      },
      {
        name: 'star',
        type: 'Rate',
        label: '推荐指数',
        config: {
          count: 3
        }
      },
      {
        name: 'date',
        type: 'DatePicker',
        label: '时间',
        config: {
          showTime: true,
          format: "YYYY-MM-DD HH:mm:ss"
        }
      },
    ]
    return (
      <Modal title="编辑" visible={this.props.visible} footer={null} onCancel={this.props.cancel}>
        <JSONForm
          labelCol={4}
          formInfoList={formInfoList}
          resetBtnText="取消"
          submitBtnText="提交"
          initialValues={this.props.initialValues}
          submit={this.submit}
          reset={this.props.cancel}
        ></JSONForm>
      </Modal>
    );
  }
}

export default editForm;