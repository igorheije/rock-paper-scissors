import React from 'react';
import Triangle from '../../images/bg-triangle.svg';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Scissors from '../../images/icon-scissors.svg';

import './Original.css';

export const Original = ({ setMao }) => {
  return (
    <div className="original">
      <img src={Triangle} alt="Triangle" />
      <div className="mao paper">
        <button onClick={() => setMao(Paper)}>
          <img src={Paper} alt="Paper" />
        </button>
      </div>
      <div className="mao rock">
        <button onClick={() => setMao(Rock)}>
          <img src={Rock} alt="Rock" />
        </button>
      </div>
      <div className="mao scissors">
        <button onClick={() => setMao(Scissors)}>
          <img src={Scissors} alt="Scissors" />
        </button>
      </div>
    </div>
  );
};
