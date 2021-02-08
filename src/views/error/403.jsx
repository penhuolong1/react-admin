import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { withRouter } from "react-router-dom";


class index extends Component {
  toHome() {
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <Result
        status="403"
        title="403"
        subTitle="对不起，您没有权限访问该页面"
        extra={<Button onClick={this.toHome} type="primary">Back Home</Button>}
      />
    );
  }
}

export default withRouter(index);
