import React, { Component } from 'react';
import { Tag } from 'antd'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { delTags } from '@/store/actions/tagsView.js'

class item extends Component {
  handleClose = () => {
    const path = this.props.delTags(this.props.item.path)
    if (path) {
      this.props.history.push(path)
    }
  }
  // 点击跳转路由
  clickItem = () => {
    this.props.history.push(this.props.item.path)
  }
  render() {
    const { item } = this.props
    const sty = {
      cursor: 'pointer'
    }
    return (
      <Tag
        closable
        style={sty}
        color={item.active ? 'warning':''}
        onClose={e => {
          e.preventDefault();
          this.handleClose();
        }}
        onClick={this.clickItem}
      >
        {item.title}
      </Tag>
    );
  }
}

export default connect((state)=>state, {delTags})(withRouter(item));
