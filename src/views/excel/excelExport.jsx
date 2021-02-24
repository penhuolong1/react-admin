import React, { Component } from 'react';
import { Form, Input, Button, Card, Table, Radio, Select, message } from 'antd'
import { tableList, deleteItem, findTableById } from '@/api/table.js'
const { Option } = Select;

class index extends Component {
  formRef = React.createRef();
  state = {
    list: null,
    loading: false,
    selectedRows: null
  }
  searchParams = {}
  componentDidMount() {
    this.getTableList()
  }
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
  getCheck = (val, row) => {
    console.log(row)
    this.setState({
      selectedRows: row
    })
  }
  export = (type) => {
    if (type === 'select' && this.state.selectedRows.length === 0) {
      return message.error('至少选择一项导出')
    }
    const params = this.formRef.current.getFieldsValue()
    const tHeader = ["标题", "作者", "阅读量", "推荐指数", "状态", "时间"];
    const filterVal = ["title", "author", "readings", "star", "status", "date"];
    const list = type === "all" ? this.state.list : this.state.selectedRows;
    const data = this.formatJson(filterVal, list);

    import("@/lib/Export2Excel").then((excel) => {
      const obj = {
        header: tHeader,
        data,
        ...params
      }
      console.log(obj)
      excel.export_json_to_excel(obj);
    });
  }
  formatJson = (filterVal, jsonData) => {
    return jsonData.map(v => filterVal.map(j => v[j]))
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
        <Card title="导出选项" className="marginBottom">
        <Form
          name="basic"
          layout="inline"
          ref={this.formRef}
        >
          <Form.Item
            label="文件名"
            name="filename"
          >
            <Input placeholder="请输入文件名" />
          </Form.Item>

          <Form.Item
            label="单元格宽度是否自适应"
            name="autoWidth"
          >
            <Radio.Group>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="文件类型"
            name="bookType"
          >
            <Select>
              <Option value="xlsx">xlsx</Option>
              <Option value="csv">csv</Option>
              <Option value="txt">txt</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.export.bind(this, 'all')}>
              全部导出
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.export.bind(this, 'select')}>
              导出已选项
            </Button>
          </Form.Item>
        </Form>
        </Card>
        <Card>
          <Table 
            rowSelection={{
              type: 'checkbox',
              onChange: this.getCheck
            }}
            dataSource={this.state.list}
            columns={columns}
            rowKey="id"
            loading={this.state.loading}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default index;
