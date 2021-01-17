import React, { Component } from 'react';
import * as types from "@/store/actions-type"
import { Layout, Menu, Dropdown, Avatar, Button, message } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '@/store/actions/user.js'
import { toggleCollapsed } from '@/store/actions/menu.js'

import './index.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  SettingOutlined,
  DownOutlined
} from '@ant-design/icons';


const { Header} = Layout;
class index extends Component {
  state = {
    isMenuOpen: false
  }
  // 退出
  reqLogOut = () => {
    this.props.logout().then( () => {
      message.success('退出成功')
    })
  }
  // 切换菜单
  toggleCollapsed = () => {
    this.props.toggleCollapsed(!this.props.collapsed)
  }
  render() {
    const {avatar} = this.props.userInfo
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/dashboard">首页</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Button type="text" onClick={this.reqLogOut}>
            退出
          </Button>
        </Menu.Item>
      </Menu>
    )
    return (
      <Header className="layout-header">
        <div className="layout-header-left">
          <div className="menu-icon">
            <Button type="text" className="text-btn" onClick={this.toggleCollapsed}>
              {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          </div>
          <div className="title-wrapper">
            首页
          </div>
        </div>
        <div className="layout-header-right">
          <Button type="text" className="text-btn">
            <FullscreenOutlined className="menu-icon"></FullscreenOutlined>
          </Button>
          <Button type="text" className="text-btn">
            <SettingOutlined className="menu-icon"></SettingOutlined>
          </Button>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text">
              <Avatar src={avatar} />  <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    ...state.user,
    ...state.menu
  };
};
export default connect(mapStateToProps, { logout, toggleCollapsed })(index);
