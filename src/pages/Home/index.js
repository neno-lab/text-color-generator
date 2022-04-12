import './style.scss';

import { apiGetRandomColor } from '../../helpers/api/colors';
import Input from '../../components/Input';
import MainWrapper from '../../containers/MainWrapper';
import Paragraph from '../../components/Paragraph';
import React from 'react';
import SimpleList from '../../components/SimpleList';
import usePrevious from '../../helpers/hooks/usePrevious';

import { checkIfDataStatusCorrect, invertHex } from '../../helpers/functions';

const Home = () => {
  // React states
  const [text, setText] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [color, setColor] = React.useState('#000000');
  const [previousColors, setPreviousColors] = React.useState([]);

  // React refs
  const previousColor = usePrevious(color);

  // Function for api call and setting the new state
  const handleOnClickParagraph = async () => {
    const { colors, success } = await apiGetRandomColor();

    if (checkIfDataStatusCorrect(success)) {
      if (colors && colors.length) {
        setColor(`#${colors[0].hex}`);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Oops! Something went wrong.');
    }
  };

  // Following color state to set previous color state
  React.useEffect(() => {
    if (previousColor) {
      setPreviousColors([...previousColors, previousColor]);
    }

    // Changing body background
    document.body.style.background = `#${invertHex(color.split('#')[1])}`;
  }, [color]);

  console.log('current color: ', color);
  console.log('prev color', previousColors);
  return (
    <MainWrapper>
      <Paragraph
        style={{ marginBottom: '35px', color }}
        text={text}
        onClick={handleOnClickParagraph}
      />
      <Input
        name='test-input'
        style={{ marginBottom: '50px' }}
        value={text}
        onChange={inputValue => setText(inputValue)}
      />
      <SimpleList
        items={previousColors}
      />
    </MainWrapper>
  );
};

export default Home;
