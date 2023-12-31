import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Icon({ className, color, fontSize }) {
  return (
    <i className={className} style={{ color, fontSize }} />
  );
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};
