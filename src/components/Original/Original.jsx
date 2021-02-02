import React from 'react';
import styled from 'styled-components';
import { useType } from '../../context/Type';
import { Mao } from '../Mao';

const JogoOriginal = styled.div`
  max-width: 700px;
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 40px auto;
  position: relative;
  > img {
    position: absolute;
    align-self: center;
    justify-self: center;
    max-width: 400px;
    margin-top: 30px;
  }
  div:nth-child(4) {
    grid-column: span 2;
  }
`;

export const Original = ({ setMao }) => {
  const { type } = useType();
  const Triangle = type.fundo;
  const { Paper, Rock, Scissors } = type.maosSvg;

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
