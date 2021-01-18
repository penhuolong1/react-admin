import React, { Component } from 'react';
import './index.scss'
import { Scrollbars } from "react-custom-scrollbars";
import { Link, withRouter } from "react-router-dom";
import Item from './components/item'
import {findPathByLabelToObj} from '@/utils/tools.js'



class index extends Component {
  state = {
    tagList: []
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const list = [
      {
        title: '首页',
        path: '/123'
      },
      {
        title: '首页',
        path: '/123'
      }
    ]
    return (
      <div className='tagsView-wrapper'>
        {/* <Scrollbars> */}
          <ul>
            {
             list.map((item, index) => {
               return (<Item key={index} item={item}></Item>)
             }) 
            }
          </ul>
        {/* </Scrollbars> */}
      </div>
    );
  }
}

export default withRouter(index);