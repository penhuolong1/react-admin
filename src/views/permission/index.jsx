import React, { Component } from 'react';
import { Card, Button } from 'antd'

class index extends Component {
  render() {
    return (
      <Card title="权限说明">
        <p>分为三个角色 admin,editor,guest三个角色 如果角色没权限查看该页面则会跳转到403页面 admin拥有所有权限可以看到所有页面 editor,guest拥有部分权限</p>
      </Card>
    );
  }
}

export default index;
