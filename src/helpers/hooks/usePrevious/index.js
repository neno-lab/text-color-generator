import React from 'react';

const usePrevious = (value) => {
  const currentRef = React.useRef(value);
  const previousRef = React.useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
};

export default usePrevious;
