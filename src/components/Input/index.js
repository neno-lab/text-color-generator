import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ name, value, onChange, style }) => (
  <div className='input-holder' style={style}>
    <div className='input-border'>
      <label className={`${value && value.length ? 'invisible' : ''}`} htmlFor={name}>Type...</label>
      <input
        autoComplete='off'
        name={name}
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  </div>
);

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};

export default Input;
