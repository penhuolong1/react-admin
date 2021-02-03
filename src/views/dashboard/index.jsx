import React, { Component } from 'react';
import PanelGroup from './components/panelGroup'
import LineCharts from './components/lineCharts'

class index extends Component {
  render() {
    return (
      <div>
        <PanelGroup></PanelGroup>
        <LineCharts></LineCharts>
      </div>
    );
  }
}

export default index;
