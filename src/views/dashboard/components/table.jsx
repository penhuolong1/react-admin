import React, { Component } from 'react';
import { Table, Tag, Card } from 'antd';
import { dashboardList } from '@/api/dashboard'

class index extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    dashboardList().then(({state, data}) => {
      if (state === 0) {
        this.setState({
          list: data
        })
        console.log(this.state.list)
      }
    })
  }
  render() {
    const columns = [
      {
        title: 'Order_No',
        dataIndex: 'order_no',
        key: 'key',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'key',
        render: text => <span>${text}</span>,
      },
      {
        title: 'Status',
        dataIndex: 'tag',
        key: 'key',
        render: text => <Tag color={text === "pending" ? "magenta" : "green"} key={text}>
          {text}
        </Tag>,
      },
    ]
    return (
      <Card>
        <Table columns={columns} dataSource={this.state.list} />
      </Card>
    );
  }
}

export default index;
