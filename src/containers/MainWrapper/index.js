import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const MainWrapper = ({ children, className }) => (
  <div className={`main-wrapper ${className || ''}`}>{children}</div>
);

MainWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default MainWrapper;
