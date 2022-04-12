import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import SimpleListItemComponent from './pieces/SimpleListItem';

const SimpleListItem = React.memo(SimpleListItemComponent);

const SimpleList = ({ className, items }) => (
  <div className={`simple-list-holder ${className || ''}`}>
    <ul>
      {items && items.length ? items.map((item, index) => (
        <SimpleListItem
          key={index}
          text={item}
        />
      ))
        : null
      }
    </ul>
  </div>
);

SimpleList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array
};

export default SimpleList;
