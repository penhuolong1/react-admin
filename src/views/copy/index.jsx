import React, { Component } from 'react';
import { Card, Button } from 'antd'
import clip from "@/utils/clipboard"; 

const text = '复制内容复制内容复制内容'
class index extends Component {
  copy = (e) => {
    clip(text, e);
  }
  render() {
    return (
      <Card title="复制面板">
        <p>
          {text}
        </p>
        <Button type="primary" onClick={this.copy}>复制</Button>
      </Card>
    );
  }
}

export default index;
