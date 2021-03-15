import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ text, type, id, placeholder, value }) => (
  <label>
    {text}
    <input type={type} id={id} placeholder={placeholder} value={value} />
  </label>
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
