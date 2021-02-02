import React, { useContext } from 'react';

import Main from './Main';

import { Header } from './Header/Header';
import ImageRoules from '../images/image-rules.svg';
import ImageRoulesB from '../images/image-rules-bonus.svg';
import { RulesSelect } from './RulesSelect';
import { TypeContext } from '../context/Type';
import { types } from '../context/Type';

const Principal = () => {
  const [game, setGame] = React.useState(false);
  const { setType } = useContext(TypeContext);

  if (!game)
    return (
      <RulesSelect>
        <div>
          <h1>Select Game</h1>
          <button
            onClick={() => {
              setGame(true);
              setType(types[0]);
            }}
          >
            <h3>Classical Game</h3>
            <img src={ImageRoules} alt="Classical Game" />
          </button>
          <button
            onClick={() => {
              setGame(true);
              setType(types[1]);
            }}
          >
            <h3>Bonus Game</h3>
            <img src={ImageRoulesB} alt="Classical Game" />
          </button>
        </div>
      </RulesSelect>
    );
  return (
    <>
      <Header />
      <Main setGame={setGame} />
    </>
  );
};

export default Principal;
