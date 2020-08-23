import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ title }) => (
  <button className="btn btn-text btn-animated btn-blue">{title}</button>
);

export default CustomButton;
