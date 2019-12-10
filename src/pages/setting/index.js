import React, { Component } from "react"
import {connect} from "react-redux"
import {getColor} from "../setting/reducer/setting.redux"
import { Collapse, Select, Button, Modal, Switch, Slider, InputNumber, Row, Col,Input} from 'antd'
const { Panel } = Collapse
const { Option } = Select


class Setting extends Component {
  state = { 
    visible: false,
    inputValue: 1,
    disabled: false,
    color:""
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  }

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };
  ChangeColor = (e)=>{
     this.props.getColor(e.target.value)
     localStorage.setItem("color",e.target.value)
  }
  

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    const { disabled } = this.state
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

        <Panel header="声音设置" key="2">
        <div style={{ width: 90, float: "left", height: "30px", lineHeight: "30px" }}>声音 : </div>
        <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
        <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={100}
            onChange={this.onChange}
            value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
            disabled={!disabled}
          />
        </Col> 
        <Col span={4}>
          <InputNumber
            min={1}
            max={100}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
        </Panel>
        <Panel header="颜色设置" key="3">
        <div style={{ width: 90, float: "left", height: "30px", lineHeight: "30px" }}>主题颜色: </div>
        <Input type="color"   onChange={this.ChangeColor}/>
        </Panel>
      </Collapse>
    )
  }
}

const mapStateToProps = state =>{
  return{
    content : state.colorStore
  }
}


export default connect(mapStateToProps,{getColor})(Setting)