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
  reset = () => {
    this.formRef.current.resetFields();
  }
  render() {
    return (
      <div>
        <Form
          ref={this.formRef}
          labelCol={{ span: this.props.labelCol || 4 }}
          wrapperCol={{ span: this.props.wrapperCol || 4 }}
          layout={this.props.layout}
          onFinish={this.props.submit}
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
                        str = (<Input {...item.config}></Input>)
                        break;
                      case 'Password':
                        str = (<Input.Password {...item.config}></Input.Password>)
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
                          <Select {...item.config}>
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
                          <TreeSelect {...item.config} treeData={item.data}>
                          </TreeSelect>
                        )
                        break;
                      case 'Cascader':
                          str = (
                            <Cascader
                              {...item.config}
                              options={item.data}
                            />
                          )
                          break;
                      case 'DatePicker':
                        str = (
                          <DatePicker
                            {...item.config}
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
              clear
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default index;
