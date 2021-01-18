import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Button } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";


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
  getSubMenu = (menuList) => {
    return (<SubMenu key={menuList.path} icon={menuList.icon} title={menuList.title}>
      { 
        menuList.children.map(item => {
          if (item.children && item.children.length > 0) {
            return this.getSubMenu(item)
          } else {
            return (<Menu.Item key={item.path} icon={item.icon}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>)
          }
        })
      }
      </SubMenu>)
  }
  render() {
    const { collapsed } = this.props
    const path = this.props.location.pathname
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Scrollbars> 
          <Menu
            defaultSelectedKeys={['/dashboard']} 
            selectedKeys={[path]}
            mode="inline"
            theme="dark"
          >
            {
              menuList.map((item, index) => {
                let ary = []
                if (!item.children) {
                  ary.push(<Menu.Item key={item.path} icon={item.icon}>
                    <Link to={item.path}>{item.title}</Link>
                  </Menu.Item>)
                } else {
                  ary.push(this.getSubMenu(item))
                }
                return ary
              })
            }
          </Menu>
        </Scrollbars>
      </Sider>
    );
  }
}

export default connect(state => state.menu)(withRouter(index));
