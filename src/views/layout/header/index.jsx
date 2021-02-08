import React, { Component } from 'react';
import * as types from "@/store/actions-type"
import { Layout, Menu, Dropdown, Avatar, Button, message } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '@/store/actions/user.js'
import { toggleCollapsed } from '@/store/actions/menu.js'
import screenfull from 'screenfull'
import Breadcrumb from './breadcrumb'

import './index.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  SettingOutlined,
  DownOutlined
} from '@ant-design/icons';


const { Header} = Layout;
class index extends Component {
  state = {
    isFull: false
  }
  // 退出
  reqLogOut = () => {
    this.props.logout().then( () => {
      message.success('退出成功')
      window.location.reload()
    })
  }
  // 放大缩小屏幕
  toggleFull = ()=> {
    this.setState({
      isFull: !this.state.isFull
    })
    screenfull.toggle()
  }
  // 切换菜单
  toggleCollapsed = () => {
    this.props.toggleCollapsed(!this.props.collapsed)
  }
  render() {
    const {name} = this.props.userInfo
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/dashboard">首页</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a type="text" onClick={this.reqLogOut}>
            退出
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <Header className="layout-header">
        <div className="layout-header-left">
          <div className="menu-icon">
            <Button type="text" id="hamburger" className="text-btn" onClick={this.toggleCollapsed}>
              {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          </div>
          <div className="title-wrapper">
            <Breadcrumb />
          </div>
        </div>
        <div className="layout-header-right">
          <Button id="fullscreen" type="text" className="text-btn" onClick={this.toggleFull}>
            {!this.state.isFull ? <FullscreenOutlined className="menu-icon"></FullscreenOutlined> : <FullscreenExitOutlined className="menu-icon"></FullscreenExitOutlined>}
          </Button>
          <Button id="setting" type="text" className="text-btn">
            <SettingOutlined className="menu-icon"></SettingOutlined>
          </Button>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text">
              {name}
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.user,
    ...state.menu
  };
};
export default connect(mapStateToProps, { logout, toggleCollapsed })(index);
