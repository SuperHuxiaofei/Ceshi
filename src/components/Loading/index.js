import React, { Component } from 'react';
import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Loading extends Component {
  render() {
    return (
      <div>
        <Spin indicator={antIcon} />
      </div>
    );
  }
}

export default Loading;