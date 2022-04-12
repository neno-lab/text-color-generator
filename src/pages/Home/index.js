import './style.scss';

import { apiGetRandomColor } from '../../helpers/api/colors';
import { checkIfDataStatusCorrect } from '../../helpers/functions';
import Input from '../../components/Input';
import MainWrapper from '../../containers/MainWrapper';
import Paragraph from '../../components/Paragraph';
import React from 'react';
import usePrevious from '../../helpers/hooks/usePrevious';

const Home = () => {
  const [text, setText] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [color, setColor] = React.useState('#000');
  const previousColor = usePrevious(color);

  const handleOnClickParagraph = async () => {
    const { data, status } = await apiGetRandomColor();

    if (checkIfDataStatusCorrect(status)) {
      const { colors } = data;
      if (colors && colors.length) {
        setColor(`#${colors[0].hex}`);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Oops! Something went wrong.');
    }
  };

  return (
    <MainWrapper>
      <Paragraph
        style={{ marginBottom: '35px', color }}
        text={text}
        onClick={handleOnClickParagraph}
      />
      <Input
        name='test-input'
        value={text}
        onChange={inputValue => setText(inputValue)}
      />
    </MainWrapper>
  );
};

export default Home;
