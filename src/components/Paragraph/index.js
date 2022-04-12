import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Paragraph = ({ className, text, onClick }) => (
  <p className={className || ''} onClick={onClick}>{text}</p>
);

Paragraph.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Paragraph;
