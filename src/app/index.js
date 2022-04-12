import '../resources/styles/root.scss';

import LayoutDesktop from './layoutDesktop';
import LayoutMobile from './layoutMobile';
import React from 'react';
import useWindowSize from '../helpers/hooks/useWindowSize';

const App = () => {
  const windowSize = useWindowSize();

  if (windowSize.width >= 1025) return <LayoutDesktop />;
  return <LayoutMobile />;
};

export default App;
