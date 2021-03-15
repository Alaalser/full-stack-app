import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, id, placeholder }) => (
  <input type={type} id={id} placeholder={placeholder} />
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
