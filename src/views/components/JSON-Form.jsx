import React, { Component } from 'react';
import { Card } from 'antd'
import './index.scss'
import JSONForm from '@/components/JSONForm'

class index extends Component {
  state = {
  }
  submit = (val) => {
    console.log('提交的方法')
    console.log(val)
  }
  reset = (val) => {
    console.log('重置')
  }
  render() {
    const labelCol = 4
    const wrapperCol = 10
    const layout = 'Vertical'
    const initialValues = {
      email: '10000000@qq.com',
      name: '张xx',
      switch: false
    }
    const formInfoList = [
      {
        name: 'name',
        type: 'Input',
        label: 'Name',
        rules: [
          {
            required: true,
            message: '请输入姓名',
          },
        ]
      },
      {
        name: 'email',
        type: 'Input',
        label: 'Email',
        rules: [
          {
            required: true,
            message: '请输入邮箱',
          },
          {
            type: 'email',
            message: '邮箱格式不正确',
          }
        ]
      },
      {
        name: 'phone',
        type: 'Input',
        label: 'Phone',
        rules: [
          {
            required: true,
            message: '请输入手机号',
          },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: '手机号码格式不正确',
          }
        ]
      },
      {
        name: 'password',
        type: 'Password',
        label: 'Password',
        rules: []
      },
      {
        name: 'radio',
        type: 'Radio',
        label: 'Radio',
        rules: [],
        data: [
          {
            value: 'small',
            text: 'Small'
          },
          {
            value: 'default',
            text: 'Default'
          },
          {
            value: 'large',
            text: 'Large'
          }
        ]
      },
      {
        name: 'select',
        type: 'Select',
        label: 'Select',
        rules: [],
        data: [
          {
            value: 'small',
            text: 'Small'
          },
          {
            value: 'default',
            text: 'Default'
          },
          {
            value: 'large',
            text: 'Large'
          }
        ],
        config: {
          mode: 'multiple'
        }
      },
      {
        name: 'treeSelect',
        type: 'TreeSelect',
        label: 'TreeSelect',
        rules: [],
        data: [
          { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
        ]
      },
      {
        name: 'cascader',
        type: 'Cascader',
        label: 'Cascader',
        rules: [],
        data: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
              },
            ],
          },
        ]
      },
      {
        name: 'datePicker',
        type: 'DatePicker',
        label: 'DatePicker',
        rules: []
      },
      {
        name: 'switch',
        type: 'Switch',
        label: 'Switch',
        rules: []
      }
    ]
    return (
      <div>
        <Card title="简介" className="marginBottom">
          通过JSON生成form表单
        </Card> 
        <Card className="marginBottom">
          <JSONForm 
            labelCol={labelCol} 
            wrapperCol={wrapperCol}
            layout={layout}
            formInfoList={formInfoList}
            initialValues={initialValues}
            submit={this.submit}
            reset={this.reset}
          ></JSONForm>
        </Card>
      </div>
    );
  }
}

export default index;
