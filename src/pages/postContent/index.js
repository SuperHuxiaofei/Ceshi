import React, { Component } from "react"
import { message, Button } from 'antd';
import { connect } from "react-redux"
import E from 'wangeditor'

class PostContent extends Component {
  constructor(props, context) {
    super(props, context)
    console.log(this.context)
    this.state = {
      editorContent: ''
    }
  }
  render() {
    return (
      // <div>postContent</div>
      <div>
        {/* 将生成编辑器 */}
        <div ref="editorElem" style={{ textAlign: 'left', width: 'auto', minWidth: 750, margin: '10px auto' }}></div>
        <button onClick={this.clickHandle.bind(this)}>提交</button>
      </div>
    )
  }
  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E(elem)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    editor.create()
  }

  clickHandle() {
    this.state.editorContent !== '' && this.state.editorContent !== "<p><br></p>" ? console.log(this.state.editorContent) : message.warning('请输入内容');
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    state
  }
}
export default connect(mapStateToProps)(PostContent)