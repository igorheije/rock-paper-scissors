import React from 'react';

import './Header.css';

export const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="modo">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="score">
        <h5>SCORE</h5>
        <span>{score}</span>
      </div>
    </div>
  );
};
