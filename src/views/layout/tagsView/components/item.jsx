import React, { Component } from 'react';
import { Tag } from 'antd'

class item extends Component {
  handleClose = () => {

  }
  render() {
    console.log(this.props)
    const { item } = this.props
    return (
      <Tag
        closable
        color="warning"
        onClose={e => {
          e.preventDefault();
          this.handleClose();
        }}
      >
        {item.title}
      </Tag>
    );
  }
}

export default item;