import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import menuList from '@/config/menuConfig.js'

const {Sider} = Layout;
const { SubMenu } = Menu
class index extends Component {
  componentDidMount() {
  }
  getSubMenu = (menuList) => {
    const { role } = this.props.user.userInfo
    return (<SubMenu key={menuList.path} icon={menuList.icon} title={menuList.title}>
      { 
        menuList.children.map(item => {
          if (!item.isNotMenu && item.roles?.indexOf(role) !== -1) {
            if (item.children && item.children.length > 0) {
              return this.getSubMenu(item)
            } else {
              return (<Menu.Item key={item.path} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>)
            }
          }
          return []
        })
      }
      </SubMenu>)
  }
  render() {
    const { collapsed } = this.props.menu
    const { role } = this.props.user.userInfo
    const path = this.props.location.pathname
    return (
      <Sider 
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
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
                if (!item.isNotMenu && item.roles?.indexOf(role) !== -1) {
                  if (!item.children) {
                    ary.push(<Menu.Item key={item.path} icon={item.icon}>
                      <Link to={item.path}>{item.title}</Link>
                    </Menu.Item>)
                  } else {
                    ary.push(this.getSubMenu(item))
                  }
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

export default connect(state => state)(withRouter(index));
