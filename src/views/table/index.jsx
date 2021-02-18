import React, { Component } from 'react';
import { Card, Table } from 'antd'
import { tableList } from '@/api/table.js'

class index extends Component {
  state = {
    list: null
  }
  componentDidMount() {
    tableList().then(res => {
      if (res.state === 0) {
        this.setState({
          list: res.data
        })
      }
    })
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
      }
    ]
    return (
      <div>
        <Card title="搜索" className="marginBottom">
        </Card>
        <Card>
          <Table dataSource={this.state.list} columns={columns}></Table>
        </Card>
      </div>
    );
  }
}

export default index;
