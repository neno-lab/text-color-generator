import './style.scss';

import Input from '../../components/Input';
import MainWrapper from '../../containers/MainWrapper';
import Paragraph from '../../components/Paragraph';
import React from 'react';

const Home = () => {
  const [text, setText] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

  const handleOnClickParagraph = () => {
    console.log('clicked!');
  };

  const handleOnChangeInput = (inputValue) => {
    setText(inputValue);
  };

  return (
    <MainWrapper>
      <Paragraph
        style={{ marginBottom: '35px' }}
        text={text}
        onClick={handleOnClickParagraph}
      />
      <Input
        name='test-input'
        value={text}
        onChange={handleOnChangeInput}
      />
    </MainWrapper>
  );
};

export default Home;
