import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import DocumentTitle from "react-document-title";
import { Link, withRouter } from "react-router-dom";
import {getTreeItemByLabel, findPathByLabelToObj} from '@/utils/tools.js'
import menuList from '@/config/menuConfig.js'
import routeMap from '@/config/routeMap.js'

const { Content } = Layout;
class index extends Component {
  render() {
    const { pathname } = this.props.location
    const title = findPathByLabelToObj(pathname, menuList).title
    return (
      <DocumentTitle title={title + 'Ant-Design-Pro'}>
        <Content>
          <Switch>
            {
              routeMap.map((item, index) => {
                return (
                  <Route exact path={item.path} component={item.component} key={index}></Route>
                )
              })
            }
          </Switch>
        </Content>
      </DocumentTitle>
    );
  }
}

export default withRouter(index);
