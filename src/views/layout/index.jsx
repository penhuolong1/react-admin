import React, { Component } from 'react';
import { Layout } from 'antd';
import { Redirect, withRouter} from 'react-router-dom'



import Header from './header/index.jsx';
import Sider from './menu/index.jsx';
import Content from './content/index.jsx';
import TagsView from './tagsView/index.jsx';

class Main extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return (
        <Redirect to="/dashboard" />
      )
    } else {
      return (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider />
          <Layout>
            <Header />
            <TagsView />
            <Content />
          </Layout>
        </Layout>
      );
    }
  }
}

export default withRouter(Main);
