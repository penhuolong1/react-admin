import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Button } from 'antd';
import { Link, withRouter } from "react-router-dom";

import menuList from '@/config/menuConfig.js'
import {
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons';

const {Sider} = Layout;
const { SubMenu } = Menu
class index extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { collapsed } = this.props
    const path = this.props.location.pathname
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          defaultSelectedKeys={['/dashboard']} 
          selectedKeys={[path]}
          mode="inline"
          theme="dark"
        >
          {
            menuList.map((item, index) => {
              return (<Menu.Item key={item.path} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>)
            })
          }
        </Menu>
      </Sider>
    );
  }
}

export default connect(state => state.menu)(withRouter(index));
