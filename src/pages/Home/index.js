import './style.scss';

import MainWrapper from '../../containers/MainWrapper';
import Paragraph from '../../components/Paragraph';
import React from 'react';

const Home = () => {
  const [text, setText] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

  const handleOnClickParagraph = () => {
    console.log('clicked!');
  };

  return (
    <MainWrapper>
      <Paragraph
        text={text}
        onClick={handleOnClickParagraph}
      />
    </MainWrapper>
  );
};

export default Home;
