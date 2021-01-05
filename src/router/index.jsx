import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '@/views/login/index.jsx'
import Layout from '@/views/layout/index.jsx'

class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/" component={Layout}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routers;
