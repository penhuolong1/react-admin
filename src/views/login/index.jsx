import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss'

class Login extends Component {
  render() {
    return (
      <div class="login-wrapper">
        <Form layout="inline">
          <Form.Item label=":">
            <Input onChange={this.filterTitleChange} />
          </Form.Item>
        </Form>
      </div>
    );
  }
  filterTitleChange(e) {
    console.log(e)
  }
}

export default Login;
