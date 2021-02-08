import React, { Component, useState } from 'react';
import { Card, Button } from 'antd'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './index.scss'

class index extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }
  render() {
    const { editorState } = this.state
    return (
      <div>
        <Card title="简介" className="marginBottom">
          富文本编辑器使用插件<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg</a>。
        </Card> 
        <Card title="富文本编辑" bordered={false} style={{ minHeight: 400 }} className="marginBottom">
          <Editor
            editorState={editorState}
            editorClassName="editor-class"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
        <Card title="同步转换HTML">
        {this.state.editorState &&
              draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
        </Card>
      </div>
    );
  }
}

export default index;
