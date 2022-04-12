import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Paragraph = ({ className, style, text, onClick }) => (
  <p
    className={className || ''}
    style={style}
    onClick={onClick}
  >
    {text}
  </p>
);

Paragraph.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Paragraph;
