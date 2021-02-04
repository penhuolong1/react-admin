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
      radar: {
        radius: "66%",
        center: ["50%", "42%"],
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: "rgba(127,95,132,.3)",
            opacity: 1,
            shadowBlur: 45,
            shadowColor: "rgba(0,0,0,.5)",
            shadowOffsetX: 0,
            shadowOffsetY: 15,
          },
        },
        indicator: [
          { name: "Sales", max: 10000 },
          { name: "Administration", max: 20000 },
          { name: "Information Techology", max: 20000 },
          { name: "Customer Support", max: 20000 },
          { name: "Development", max: 20000 },
          { name: "Marketing", max: 20000 },
        ],
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Allocated Budget", "Expected Spending", "Actual Spending"],
      },
      series: [
        {
          type: "radar",
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: "Allocated Budget",
              itemStyle: {
                color: '#32DADD'
              }
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: "Expected Spending",
              itemStyle: {
                color: '#C8B2F4'
              }
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: "Actual Spending",
              itemStyle: {
                color: '#63C2FF'
              }
            },
          ],
          animationDuration: 3000,
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
