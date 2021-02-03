import React, { Component } from 'react';
import { Row, Col, Card } from 'antd'
import CountUp from "react-countup";

import {
  UserOutlined,
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import './index.scss'

class index extends Component {
  render() {
    const list = [
      {
        icon: <UserOutlined className="icon" style={{color: "#40c9c6"}} />,
        title: 'New Visits',
        court: 102400
      },
      {
        icon: <MessageOutlined className="icon" style={{color: "#36a3f7"}}/>,
        title: 'Messages',
        court: 81212
      },
      {
        icon: <PayCircleOutlined className="icon" style={{color: "#f4516c"}}/>,
        title: 'Purchases',
        court: 9280
      },
      {
        icon: <ShoppingCartOutlined className="icon" style={{color: "#f6ab40"}}/>,
        title: 'Shoppings',
        court: 13600
      }
    ]
    return (
      <div>
        <Row gutter={16}>
          {
          list.map((item, index) => {
            return (<Col md={12} lg={12} xl={6} key={index}>
              <Card className="panel_group_item">
                <div className="panel_group_item_left">
                  {item.icon}
                </div>
                <div className="panel_group_item_right">
                  <div className="title">{item.title}</div>
                  <CountUp className="court" end={item.court} start={0}/>
                </div>
              </Card>
            </Col>)
          })}
        </Row>
      </div>
    );
  }
}

export default index;
