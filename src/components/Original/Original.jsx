import React from 'react';
import Triangle from '../../images/bg-triangle.svg';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Scissors from '../../images/icon-scissors.svg';
import styled from 'styled-components';
import { Mao } from '../Mao';

const JogoOriginal = styled.div`
  max-width: 800px;
  max-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 40px auto;
  position: relative;
  > img {
    position: absolute;
    align-self: center;
    justify-self: center;
    max-width: 350px;
  }
`;

export const Original = ({ setMao }) => {
  return (
    <JogoOriginal>
      <img src={Triangle} alt="Triangle" />
      <Mao mao="paper">
        <button onClick={() => setMao('paper')}>
          <img src={Paper} alt="Paper" />
        </button>
      </Mao>
      <Mao mao="rock">
        <button onClick={() => setMao('rock')}>
          <img src={Rock} alt="Rock" />
        </button>
      </Mao>
      <Mao mao="scissors">
        <button onClick={() => setMao('scissors')}>
          <img src={Scissors} alt="Scissors" />
        </button>
      </Mao>
    </JogoOriginal>
  );
};
