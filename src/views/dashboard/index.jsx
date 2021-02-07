import React, { Component } from 'react';
import PanelGroup from './components/panelGroup'
import LineCharts from './components/lineCharts'
import RaddarChart from './components/raddarChart'
import PieChart from './components/pieChart'
import BarChart from './components/barChart'
import Table1 from './components/table'
import BoxCard from './components/boxCard'
import { Row, Col } from 'antd'


class index extends Component {
  state = {
    lineData: {
      "New Visits": {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145],
      },
      Messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130],
      },
      Purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130],
      },
      Shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130],
      },
    },
    lineType: 'New Visits'
  }
  getLineType = (value) => {
    this.setState({
      lineType: value
    })
    console.log(this.state.lineData[this.state.lineType].expectedData)
  }
  render() {
    return (
      <div>
        <PanelGroup getLineType={this.getLineType}/>
        <LineCharts 
          expectedData={this.state.lineData[this.state.lineType].expectedData}
          actualData={this.state.lineData[this.state.lineType].actualData}
        />
        <Row gutter={16}>
          <Col md={24} lg={24} xl={8}>
            <RaddarChart />
          </Col>
          <Col md={24} lg={24} xl={8}>
            <PieChart />
          </Col>
          <Col md={24} lg={24} xl={8}>
            <BarChart />
          </Col>
        </Row>
        <Row gutter={16} style={{marginTop: '10px'}}>
          <Col md={24} lg={24} xl={12}>
            <Table1 />
          </Col>
          <Col md={24} lg={24} xl={12}>
            <BoxCard />
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
