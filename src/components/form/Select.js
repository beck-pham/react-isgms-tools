import React from 'react';

const Select = props => (
  <div className="form-group">
    <label className="form-label" htmlFor={props.name}>
      {props.title}
    </label>
    <select
      className="form-select"
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
    >
      <option value="" disabled>
        {props.placeholder}
      </option>
      {props.options.map(option => {
        return (
          <option key={option} value={option} label={option}>
            {option}
          </option>
        );
      })}
    </select>
  </div>
);

export default Select;
