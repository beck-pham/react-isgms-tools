import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ title }) => (
  <button className="btn btn-text btn-animated btn-blue btn-white">
    {title}
  </button>
);

export default CustomButton;
