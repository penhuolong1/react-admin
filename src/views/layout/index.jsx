import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './header/index.jsx';
import Sider from './menu/index.jsx';
import Content from './content/index.jsx';
import TagsView from './tagsView/index.jsx';

class Main extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
      <Sider></Sider>
      <Layout>
        <Header />
        <TagsView />
        <Content />
      </Layout>
    </Layout>
    );
  }
}

export default Main;
