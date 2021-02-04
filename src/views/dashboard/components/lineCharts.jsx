import React, { Component } from 'react';
import { Card } from 'antd'
import echarts from "@/lib/echarts";
import { debounce } from '@/utils/tools'

class lineCharts extends Component {
  componentDidMount() {
    debounce(this.initChart.bind(this, this.props.expectedData, this.props.actualData), 300)()
    window.addEventListener("resize", () => this.resize());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.expectedData !=  this.props.expectedData) {
      debounce(this.initChart.bind(this, this.props.expectedData, this.props.actualData), 300)()
    }
  }
  initChart(expectedData, actualData) {
    this.myChart = this.myChart || echarts.init(this.refs.chart);
    // 绘制图表
    this.myChart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['expected', 'actual']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: "expected",
          itemStyle: {
            normal: {
              color: "#FF005A",
              lineStyle: {
                color: "#FF005A",
                width: 2,
              },
            },
          },
          smooth: true,
          type: "line",
          data: expectedData,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
        },
        {
          name: "actual",
          smooth: true,
          type: "line",
          itemStyle: {
            normal: {
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            },
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
        }
      ]
    });
  }
  resize() {
    if (this.myChart) {
      debounce(this.myChart.resize.bind(this), 300)()
    }
  }
  render() {
    const sty = {
      width: '100%',
      height: '350px'
    }
    return (
      <Card style={{marginBottom: '10px'}}>
        <div ref="chart" style={sty}></div>
      </Card>
    );
  }
}

export default lineCharts;
