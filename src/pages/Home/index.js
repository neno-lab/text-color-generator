import './style.scss';

import { apiGetRandomColor } from '../../helpers/api/colors';
import Input from '../../components/Input';
import MainWrapper from '../../containers/MainWrapper';
import Paragraph from '../../components/Paragraph';
import React from 'react';
import SimpleList from '../../components/SimpleList';
import store from '../../helpers/store';

import { checkIfDataStatusCorrect, invertHex } from '../../helpers/functions';

const Home = () => {
  // React states
  const [text, setText] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [color, setColor] = React.useState('#000000');

  // Function for api call and setting the new state
  const handleOnClickParagraph = React.useCallback(async () => {
    const { colors, success } = await apiGetRandomColor();

    if (checkIfDataStatusCorrect(success)) {
      if (colors && colors.length) {
        store.setStoredColor(color);
        if (colors[0].hex.length) {
          setColor(`#${colors[0].hex}`);
        } else {
          setColor('#000000');
        }
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Oops! Something went wrong.');
    }
  }, [color]);

  React.useEffect(() => {
    // Changing body background
    document.body.style.background = `#${invertHex(color.split('#')[1])}`;
  }, [color]);

  return (
    <MainWrapper>
      <Paragraph
        style={{ color }}
        text={text}
        onClick={handleOnClickParagraph}
      />
      <Input
        name='test-input'
        style={{ marginBottom: '50px' }}
        value={text}
        onChange={inputValue => setText(inputValue)}
      />
      <SimpleList />
    </MainWrapper>
  );
};

export default Home;
