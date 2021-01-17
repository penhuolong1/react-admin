import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import routeMap from '@/config/routeMap.js'

const { Content } = Layout;
class index extends Component {
  render() {
    return (
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
    );
  }
}

export default index;
