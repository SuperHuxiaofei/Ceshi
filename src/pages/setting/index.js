import React, { Component } from "react"
import { Collapse, Select, Button, Modal, Switch} from 'antd'
const { Panel } = Collapse
const { Option } = Select

class Setting extends Component {
  state = { visible: false };

  

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    // console.log(this.props)
    return (
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="字体设置" key="1">
          <div style={{ width: 90, float: "left", height: "30px", lineHeight: "30px" }}>字体大小 : </div>
          <Select defaultValue="中" style={{ width: 120, float: "left" , margin:" 0 10px"}}>
            <Option value="bigest">极大</Option>
            <Option value="big">大</Option>
            <Option value="middle">中</Option>
            <Option value="small">小</Option>
            <Option value="samllest">极小</Option>
          </Select>
          <div>
          <Button onClick={this.showModal}>字体选择..</Button>
          <Modal
          title="字体："
          okText="确认"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="字体选择.."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="songt">宋体</Option>
                <Option value="hett">黑体</Option>
                <Option value="kait">楷体</Option>
                <Option value="qingt">青春无限体</Option>
              </Select>
        </Modal>
        </div>
        </Panel>

        <Panel header="下载设置" key="2">
        <div style={{ width: 90, float: "left", height: "30px", lineHeight: "30px" }}>声音 : </div>
        <Switch></Switch>
        </Panel>
        <Panel header="设置" key="3">

        </Panel>
      </Collapse>
    )
  }
}
export default Setting