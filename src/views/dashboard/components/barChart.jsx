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
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        top: 10,
        left: "2%",
        right: "2%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "pageA",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration: 300
        },
        {
          name: "pageB",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration: 300
        },
        {
          name: "pageC",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [30, 52, 200, 334, 390, 330, 220],
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
