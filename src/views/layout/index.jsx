import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './header/index.jsx';
import Sider from './menu/index.jsx';
import Content from './content/index.jsx';

class Main extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
      <Sider></Sider>
      <Layout>
        <Header />
        <Content></Content>
      </Layout>
    </Layout>
    );
  }
}

export default Main;
