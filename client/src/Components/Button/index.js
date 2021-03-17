import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button type="button" id="send">
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
