import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.scss'

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="content">
          <h2>用户登陆</h2>
          <Form layout="inline">
            <Form.Item
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                placeholder="用户名"
                name="username"
                prefix={<UserOutlined className="form-icon" />}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                placeholder="密码"
                prefix={<LockOutlined  className="form-icon" />}
              />
            </Form.Item>
            <Form.Item>
              <Button className="login-btn" type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
  filterTitleChange(e) {
    console.log(e)
  }
}

export default Login;
