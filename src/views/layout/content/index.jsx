import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import DocumentTitle from "react-document-title";
import { Link, withRouter } from "react-router-dom";
import {getTreeItemByLabel, findPathByLabelToObj} from '@/utils/tools.js'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import menuList from '@/config/menuConfig.js'
import routeMap from '@/config/routeMap.js'
import './index.scss'

const { Content } = Layout;
class index extends Component {
  render() {
    const { pathname } = this.props.location
    const title = findPathByLabelToObj(pathname, menuList) ? findPathByLabelToObj(pathname, menuList).title : ''
    return (
      <DocumentTitle title={title + 'Ant-Design-Pro'}>
        <Content className="main-content">
          <TransitionGroup>
            <CSSTransition
              timeout={500}
              classNames="fade"
              exit={false}
            >
              <Switch>
                {
                  routeMap.map((item, index) => {
                    return (
                      <Route exact path={item.path} component={item.component} key={index}></Route>
                    )
                  })
                }
                <Redirect to="/404" /> {/* 没有对应路由就匹配 */} 
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>
      </DocumentTitle>
    );
  }
}

export default withRouter(index);
