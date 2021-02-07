import React, { Component } from 'react';
import Driver from "driver.js"; // import driver.js
import { Card, Button } from 'antd'

class index extends Component {
  startDriver() {
    const steps = [
      {
        element: '#start-driver',
        popover: {
          title: '打开引导',
          description: '打开页面引导',
          position: 'bottom'
        }
      },
      {
        element: '#hamburger',
        popover: {
          title: 'hamburger',
          description: '显示隐藏菜单',
          position: 'bottom'
        }
      },
      {
        element: '#fullscreen',
        popover: {
          title: 'Fullscreen',
          description: '全屏',
          position: 'left'
        }
      },
      {
        element: '#setting',
        popover: {
          title: 'Setting',
          description: '设置',
          position: 'left'
        }
      }
    ]
    const driver = new Driver();
    driver.defineSteps(steps)
    driver.start()
  }
  render() {
    return (
      <div>
        <Card title="新手引导">
          <p>引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。 本Demo是基于<a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a></p>
          <Button id="start-driver" type="primary" onClick={this.startDriver}>引导</Button>
        </Card>
      </div>
    );
  }
}

export default index;
