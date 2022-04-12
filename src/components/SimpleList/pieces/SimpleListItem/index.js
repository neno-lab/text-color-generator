import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const SimpleListItem = ({ text }) => (
  <li style={{ color: text }}>{text}</li>
);

SimpleListItem.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

export default SimpleListItem;
