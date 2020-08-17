import React from 'react';

import ToolItem from '../../tool-item/tool-item';
import TOOL_DATA from './tool.data';

import './tool.styles.scss';

class ToolPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tools: TOOL_DATA
    };
  }

  render() {
    return (
      <div className="tool-menu">
        {this.state.tools.map(({ id, ...otherToolProps }) => (
          <ToolItem key={id} {...otherToolProps} />
        ))}
      </div>
    );
  }
}

export default ToolPage;
