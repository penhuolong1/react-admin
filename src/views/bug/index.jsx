import React, { Component } from 'react';
import { Card, Button, Table } from 'antd'
import { connect } from "react-redux"
import { formatDate } from "@/utils/tools"

class index extends Component {
  jsError = () => {
    console.log(null.length)
  }
  loadErr = () => {
    let img = document.createElement("img");
    img.src = "/images/notExist.jpg";
    let parent  = document.querySelector(".app-container")
    parent.appendChild(img);
  }
  render() {
    console.log(this.props)
    const columns = [
      {
        title: "序号",
        dataIndex: "id",
        key: "id",
        render: (text,record,index)=>`${index+1}`
      },
      {
        title: "监控指标",
        dataIndex: "kind",
        key: "kind",
      },
      {
        title: "异常类型",
        dataIndex: "errorType",
        key: "errorType",
      },
      {
        title: "url",
        dataIndex: "url",
        key: "url",
      },
      {
        title: "异常信息",
        dataIndex: "desc",
        key: "desc",
        ellipsis: true
      },
      {
        title: "异常堆栈",
        dataIndex: "stack",
        key: "stack",
        ellipsis: true
      },
      {
        title: "操作元素",
        dataIndex: "selector",
        key: "selector",
        ellipsis: true
      },
      {
        title: "userAgent",
        dataIndex: "userAgent",
        key: "userAgent",
      },
      {
        title: "时间",
        dataIndex: "timestamp",
        key: "timestamp",
        render: text => {
          return formatDate(text)
        }
      }
    ]
    return (
      <div className="app-container">
        <Card title="Bug收集">
          <p>此页面是用来展示通过项目内埋点收集到的异常信息。你可以点击不同种类的异常按钮，来观察捕获到的异常信息。</p>
          <Button type="primary" onClick={this.jsError} style={{marginRight: '10px'}}>jsError</Button>
          <Button type="primary" onClick={this.loadErr}>加载资源异常</Button>
        </Card>
        <Card>
        <Table 
          dataSource={this.props.bugList}
          columns={columns}
          rowKey="id"
        ></Table>
        </Card>
      </div>
    );
  }
}

export default connect((state) => state.monitor)(index);
