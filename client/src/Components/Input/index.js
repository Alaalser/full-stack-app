import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, type, placeholder, onChange, value, ...other }) => (
  <label>
    {text}
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...other}
    />
  </label>
);

export default Input;

Input.defaultProps = {
  text: '',
  onChange: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
};
