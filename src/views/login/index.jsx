import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { API_STATE_OK } from '@/utils/constVal.js'
import { Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '@/api/login.js'
import './index.scss'

class Login extends Component {
  state = {
    token: null
  }
  // 登陆提交
  loginSubmit = values => {
    console.log(this)
    login(values).then((res) => {
      if (res.state === API_STATE_OK) {
        message.success('登录成功')
        this.setState({
          token: res.token
        })
      }
    })
  }
  render() {
    if (this.state.token) {
      return <Redirect to="/layout"/>
    }
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
