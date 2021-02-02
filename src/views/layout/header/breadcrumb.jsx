import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link, withRouter } from "react-router-dom";

import menuList from '@/config/menuConfig.js'

class breadcrumb extends Component {
  getPathList = (pathname, nodes, path) =>{
    if(path === undefined) {
      path = [];
    }
    for(var i = 0; i < nodes.length; i++) {
      var tmpPath = path.concat();
      tmpPath.push(nodes[i]);
      if(pathname === nodes[i].path) {
          return tmpPath;
      }
      if(nodes[i].children) {
        var findResult = this.getPathList(pathname, nodes[i].children, tmpPath);
        if(findResult) {
          return findResult;
        }
      }
    }
  }
  render() {
    const pathname = this.props.location.pathname
    let pathList = this.getPathList(pathname, menuList) || [] 
    if (pathList.length === 1 &&  pathList[0].title === '首页') {
      pathList = []
    }
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to='/dashboard'>首页</Link>
        </Breadcrumb.Item>
        {
          pathList.map((item, key) => {
            return (
              <Breadcrumb.Item key={key}>{item.title}</Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
    );
  }
}

export default withRouter(breadcrumb);
