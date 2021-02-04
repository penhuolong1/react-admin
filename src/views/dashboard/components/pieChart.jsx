import React, { Component } from 'react';
import { Card } from 'antd'
import echarts from "@/lib/echarts";
import { debounce } from '@/utils/tools'

class index extends Component {
  componentDidMount() {
    debounce(this.initChart.bind(this), 300)()
    window.addEventListener("resize", () => this.resize());
  }
  initChart() {
    this.myChart = this.myChart || echarts.init(this.refs.chart);
    // 绘制图表
    this.myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
      },
      calculable: true,
      series: [
        {
          name: "WEEKLY WRITE ARTICLES",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: [
            { 
              value: 320,
              name: "Industries" },
            { value: 240, name: "Technology" },
            { value: 149, name: "Forex" },
            { value: 100, name: "Gold" },
            { value: 59, name: "Forecasts" },
          ],
          animationEasing: "cubicInOut",
          animationDuration: 300
        },
      ],
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
      <Card>
        <div ref="chart" style={sty}></div>
      </Card>
    );
  }
}

export default index;
