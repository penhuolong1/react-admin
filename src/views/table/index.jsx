import React, { Component } from 'react';
import { Card, Table, Button } from 'antd'
import { tableList, deleteItem, findTableById } from '@/api/table.js'
import JSONForm from '@/components/JSONForm'
import EditForm from './editForm'
import moment from 'moment';

class index extends Component {
  state = {
    list: null,
    loading: true,
    visible: false,
    initialValues: null
  }
  searchParams = {}
  componentDidMount() {
    this.getTableList()
  }
  // 搜索
  search = async(val) => {
    this.searchParams = val
    await this.getTableList(val)
  }
  // 获取列表数据
  getTableList = (params) => {
    this.setState({
      loading: true
    })
    console.log(params)
    return new Promise((resolve) => {
      tableList(params).then(res => {
        this.setState({
          loading: false
        })
        resolve()
        if (res.state === 0) {
          this.setState({
            list: res.data
          })
        }
      })
    })
  }
  // 删除
  del = (id) => {
    console.log(id)
    deleteItem({id}).then(({state, msg}) => {
      if (state === 0) {
        this.getTableList(this.searchParams)
      }
    })
  }
  // 关闭模态框
  cancel = () => {
    this.setState({
      visible: false
    })
  }
  // 编辑
  edit = (id) => {
    findTableById({id}).then(({state, data}) => {
      if (state === 0) {
        data.date = moment(data.date)
        data.star = data.star.length 
        this.setState({
          visible: true,
          initialValues: data
        })
      }
    })
  }
  // 提交
  submit = () => {
    this.getTableList()
  }
  render() {
    const columns = [
      {
        title: '序号',
        render:(text,record,index)=>`${index+1}`,
      },
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: '阅读量',
        dataIndex: 'readings',
        key: 'readings',
      },
      {
        title: '推荐指数',
        dataIndex: 'star',
        key: 'star',
        render: text => <span>{text}</span>
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        render: text => <span>{text}</span>
      },
      {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
        render: text => <span>{text}</span>
      },
      {
        title: '操作',
        render: text => <span>
          <Button type="link" onClick={this.del.bind(this, text.id)}>删除</Button>
          <Button type="link" onClick={this.edit.bind(this, text.id)}>编辑</Button>
        </span>
      }
    ]
    const formInfoList = [
      {
        name: 'title',
        type: 'Input',
        label: '标题',
      },
      {
        name: 'status',
        type: 'Select',
        label: '类型',
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
        type: 'Select',
        label: '推荐指数',
        data: [
          {
            value: 1,
            text: '★'
          },
          {
            value: 2,
            text: '★★'
          },
          {
            value: 3,
            text: '★★★'
          }
        ],
      },
    ]
    return (
      <div>
        <Card title="搜索" className="marginBottom">
          <JSONForm
            layout="inline"
            formInfoList={formInfoList}
            formItemWidth="120px"
            resetBtnText="重置"
            submitBtnText="搜索"
            submit={this.search}
          ></JSONForm>
        </Card>
        <Card>
          <Table 
            dataSource={this.state.list}
            columns={columns}
            rowKey="id"
            loading={this.state.loading}
          ></Table>
        </Card>
        <EditForm 
          visible={this.state.visible}
          initialValues={this.state.initialValues}
          cancel={this.cancel}
          submit={this.submit}
        ></EditForm>
      </div>
    );
  }
}

export default index;
