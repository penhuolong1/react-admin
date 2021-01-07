import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '@/api/login.js'
import './index.scss'

class Login extends Component {
  // 登陆提交
  loginSubmit(values) {
    login(values).then(res => {
      debugger
    })
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="content">
          <h2>用户登陆</h2>
          <Form layout="inline" onFinish={this.loginSubmit}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                placeholder="用户名"
                prefix={<UserOutlined className="form-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
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
}

export default Login;
