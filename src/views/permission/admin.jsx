import React, { Component } from 'react';
import { Card, Button } from 'antd'

class index extends Component {
  render() {
    return (
      <Card title="admin页面">
        <p>只要admin权限可以看到这个页面</p>
      </Card>
    );
  }
}

export default index;
