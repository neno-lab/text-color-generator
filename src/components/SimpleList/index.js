import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import SimpleListItemComponent from './pieces/SimpleListItem';
import store from '../../helpers/store';

const SimpleListItem = React.memo(SimpleListItemComponent);

const SimpleList = ({ className }) => {
  const storedColors = store.getStoredColors();

  return (
    <div className={`simple-list-holder ${className || ''}`}>
      <ul>
        {storedColors && storedColors.length ? storedColors.map((item, index) => (
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
};

SimpleList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  color: PropTypes.string
};

export default SimpleList;
