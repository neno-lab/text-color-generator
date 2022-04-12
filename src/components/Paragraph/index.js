import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Paragraph = ({ text, onClick }) => (
  <p onClick={onClick}>{text}</p>
);

Paragraph.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Paragraph;
