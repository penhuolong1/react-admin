import React, { Component } from 'react';
import { Card, Progress } from 'antd'

class index extends Component {
  render() {
    const list = [
      {
        title: 'Vue',
        num: 70
      },
      {
        title: 'javascript',
        num: 18
      },
      {
        title: 'Css',
        num: 12
      },
      {
        title: 'esLint',
        num: 100
      },
    ]
    return (
      <Card
        cover={
          <img
            alt="example"
            src={require("@/assets/img/bingbing.jpg").default}
          />
        }
      >
        {
          list.map((item, index) => {
            return (
              <div key={index}>
                <div>{item.title}</div>
                <Progress percent={item.num}></Progress>
              </div>
            )
          })
        }
      </Card>
    );
  }
}

export default index;
