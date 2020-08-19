import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import Toolitems from '../menu-items/menu-items';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory">
    {sections.map(({ id, ...otherSectionProps }) => (
      <Toolitems key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
