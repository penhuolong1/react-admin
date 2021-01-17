import React, { Component } from 'react';
import { connect } from "react-redux";
import { API_STATE_OK } from '@/utils/constVal.js'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from '@/views/login/index.jsx'
import Layout from '@/views/layout/index.jsx'
import { getUserInfo } from '@/store/actions/user'

class Routers extends Component {
  componentDidMount() {
  }
  render() {
    const { token, userInfo, getUserInfo } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          {/* <Route exact path="/dashboard" component={Layout}></Route> */}
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />;
              } else {
                if (userInfo.role) {
                  return <Layout />;
                } else {
                  getUserInfo(token).then(() => <Layout />);
                }
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state.user, {getUserInfo})(Routers);
