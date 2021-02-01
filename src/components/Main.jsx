import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../context/Theme';
import { Duelo } from './Duelo/Duelo';
import { Original } from './Original/Original';

const Main = () => {
  const [mao, setMao] = React.useState('');
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <ThemeProvider>
      {mao !== '' && mao !== undefined ? (
        <Duelo setMao={setMao} mao={mao} />
      ) : (
        <Original setMao={setMao} />
      )}
    </ThemeProvider>
  );
};

export default Main;
