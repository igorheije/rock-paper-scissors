import React, { useContext } from 'react';
import { TypeContext } from '../context/Type';
import { Duelo } from './Duelo/Duelo';
import { Original } from './Original/Original';
import { Bonus } from './Bonus/Bonus';
import Roules from './Roules';
import { ButtonRoule } from './ButtonRoule';

const Main = ({ setGame }) => {
  const [mao, setMao] = React.useState('');
  const [ruleToggle, setRuleToggle] = React.useState(true);
  const { type } = useContext(TypeContext);

  if (mao !== '' && mao !== undefined)
    return <Duelo setMao={setMao} mao={mao} />;

  return (
    <>
      {type.name === 'classico' ? (
        <Original setMao={setMao} />
      ) : (
        <Bonus setMao={setMao} />
      )}

      {ruleToggle && <Roules setRuleToggle={setRuleToggle} />}
      {!mao && (
        <div className="btns">
          <ButtonRoule onClick={() => setGame(false)}>Modes</ButtonRoule>
          <ButtonRoule onClick={() => setRuleToggle(true)}>Rules</ButtonRoule>
        </div>
      )}
    </>
  );
};

export default Main;
