import React from 'react';

import MenuItem from '../../menu-item/Menu-item';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
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
      <div>
        <Header />
        <h3 style={{ textAlign: 'center' }}>
          <span
            className="heading-secondary"
            style={{ textTransform: 'capitalize', paddingBottom: '2rem' }}
          >
            Infrastructure Services Group Mail Storage Tools
          </span>
          <span
            className="heading-primary-sub"
            style={{ color: '#757575', paddingBottom: '2rem' }}
          >
            Browses to Discover Our ToolKits
          </span>
        </h3>
        <div className="tool-menu">
          {this.state.tools.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ToolPage;
