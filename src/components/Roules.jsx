import React, { useContext } from 'react';
import ImageRoules from '../images/image-rules.svg';
import ImageRoulesB from '../images/image-rules-bonus.svg';
import { RulesContainer } from './RulesContainer';
import { TypeContext } from '../context/Type';

const Roules = ({ setRuleToggle }) => {
  const { type } = useContext(TypeContext);

  return (
    <>
      {type.name === 'classico' ? (
        <RouleClassico setRuleToggle={setRuleToggle} />
      ) : (
        <RouleBonus setRuleToggle={setRuleToggle} />
      )}
    </>
  );
};

const RouleClassico = ({ setRuleToggle }) => {
  return (
    <RulesContainer>
      <div>
        <h1>Rules</h1>
        <button onClick={() => setRuleToggle(false)}>X</button>
        <img src={ImageRoules} alt="Teste" />
      </div>
    </RulesContainer>
  );
};
const RouleBonus = ({ setRuleToggle }) => {
  return (
    <RulesContainer>
      <div>
        <h1>Rules</h1>
        <button onClick={() => setRuleToggle(false)}>X</button>
        <img src={ImageRoulesB} alt="Teste" />
      </div>
    </RulesContainer>
  );
};

export default Roules;
