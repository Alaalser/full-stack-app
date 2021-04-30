import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, ...other }) => (
  <button {...other} type="button" id="send">
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
