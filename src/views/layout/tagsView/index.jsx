import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import { Scrollbars } from "react-custom-scrollbars";
import { Link, withRouter } from "react-router-dom";
import Item from './components/item'
import { dealTagsViewList } from '@/store/actions/tagsView.js'



class index extends Component {
  componentDidMount() {
    this.props.dealTagsViewList(this.props.tagsViewList, this.props.location)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.dealTagsViewList(this.props.tagsViewList, nextProps.location)
    }
  }
  render() {
    const sty = {
      alignItems: 'center',
      height: '36px'
    }
    return (
      <div className='tagsView-wrapper'>
        <Scrollbars>
          <ul style={sty}>
            {
             this.props.tagsViewList.map((item, index) => {
               return (<Item key={index} item={item}></Item>)
             }) 
            }
          </ul>
        </Scrollbars>
      </div>
    );
  }
}

export default connect(state => state.tagsView, {dealTagsViewList})(withRouter(index));
