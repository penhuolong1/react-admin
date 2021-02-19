import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

class index extends Component {
  formRef = React.createRef();
  state = {
    loading: false
  }
  reset = () => {
    this.formRef.current.resetFields();
  }
  onFinish = (obj) => {
    this.setState({
      loading: true
    })

    this.props.submit(obj).then(() => {
      this.setState({
        loading: false
      })
    })
  }
  render() {
    return (
      <div>
        <Form
          ref={this.formRef}
          labelCol={{ span: this.props.labelCol }}
          wrapperCol={{ span: this.props.wrapperCol }}
          layout={this.props.layout}
          onFinish={this.onFinish}
          initialValues={this.props.initialValues}
        >
          {
            this.props.formInfoList.map((item, index) => (
              <Form.Item 
                label={item.label} 
                name={item.name} 
                key={index}
                rules={item.rules}>
                {
                  (() => {
                    let str = null
                    switch (item.type) {
                      case 'Input':
                        str = (<Input {...item.config} style={{width: this.props.formItemWidth}}></Input>)
                        break;
                      case 'Password':
                        str = (<Input.Password {...item.config} style={{width: this.props.formItemWidth}}></Input.Password>)
                        break;
                      case 'Radio':
                        str = (
                          <Radio.Group {...item.config}>
                            {
                              item.data.map((item1, index1) => (
                                <Radio.Button key={index1} value={item1.value}>{item1.text}</Radio.Button>
                              ))
                            }
                          </Radio.Group>
                        )
                        break;
                      case 'Select':
                        str = (
                          <Select {...item.config} style={{width: this.props.formItemWidth}}>
                            {
                              item.data.map((item1, index1) => (
                                <Select.Option key={index1} value={item1.value}>{item1.text}</Select.Option>
                              ))
                            }
                          </Select>
                        )
                        break;
                      case 'TreeSelect':
                        str = (
                          <TreeSelect {...item.config} treeData={item.data} style={{width: this.props.formItemWidth}}>
                          </TreeSelect>
                        )
                        break;
                      case 'Cascader':
                          str = (
                            <Cascader
                              {...item.config}
                              options={item.data}
                              style={{width: this.props.formItemWidth}}
                            />
                          )
                          break;
                      case 'DatePicker':
                        str = (
                          <DatePicker
                            {...item.config}
                            style={{width: this.props.formItemWidth}}
                          />
                        )
                        break;
                      case 'Switch':
                        str = (
                          <Switch
                            {...item.config}
                          />
                        )
                        break;
                      default:
                        break;
                    }
                    return str
                  })()
                }
              </Form.Item>
            ))
          }
          <Form.Item wrapperCol={{ span: this.props.wrapperCol, offset: this.props.labelCol }}>
            <Button onClick={this.reset} style={{marginRight: '5px'}}>
              {this.props.resetBtnText || 'clear'}
            </Button>
            <Button type="primary" loading={this.state.loading} htmlType="submit">
              {this.props.submitBtnText || 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default index;
