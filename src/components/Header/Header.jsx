import React from 'react';
import { useScore } from '../../context/Score';
import { useType } from '../../context/Type';

import './Header.css';

export const Header = () => {
  const { score } = useScore();
  const { type } = useType();
  const { logo } = type;

  return (
    <div className="header">
      <div className="modo">
        <img src={logo} alt="LogoC" />
      </div>
      <div className="score">
        <h5>SCORE</h5>
        <span>{score}</span>
      </div>
    </div>
  );
};
