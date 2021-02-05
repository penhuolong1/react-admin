import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux'
import { Redirect, withRouter} from 'react-router-dom'
import Header from './header/index.jsx';
import Sider from './menu/index.jsx';
import Content from './content/index.jsx';
import TagsView from './tagsView/index.jsx';
import './index.scss'

class Main extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return (
        <Redirect to="/dashboard" />
      )
    } else {
      return (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider/>
          <Layout className="my-ant-layout" style={ this.props.collapsed ? {marginLeft: 80} : {marginLeft: 200}}>
            <Header />
            <TagsView />
            <Content/>
          </Layout>
        </Layout>
      );
    }
  }
}

export default connect(state => state.menu)(withRouter(Main));
