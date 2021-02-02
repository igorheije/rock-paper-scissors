import React from 'react';
import styled from 'styled-components';
import { Mao } from '../Mao';
import { useType } from '../../context/Type';

const JogoBonus = styled.div`
  max-width: 700px;
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px auto;
  position: relative;
  > img {
    position: absolute;
    align-self: center;
    justify-self: center;
    max-width: 400px;
  }
  > div:nth-child(2) {
    grid-column: span 2;
  }
  > div:nth-child(5) {
    justify-content: flex-end;
  }
  > div:nth-child(6) {
    justify-content: flex-start;
  }
  @media (max-width: 500px) {
    > div:nth-child(3) {
      justify-content: flex-start;
    }
    > div:nth-child(4) {
      justify-content: flex-end;
    }
  }
`;

export const Bonus = ({ setMao }) => {
  const { type } = useType();
  console.log(type);
  const Pentagon = type.fundo;
  const { Paper, Rock, Scissors, Lizard, Spock } = type.maosSvg;
  return (
    <JogoBonus>
      <img src={Pentagon} alt="Triangle" />
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
      <Mao mao="lizard">
        <button onClick={() => setMao('lizard')}>
          <img src={Lizard} alt="Lizard" />
        </button>
      </Mao>
      <Mao mao="spock">
        <button onClick={() => setMao('spock')}>
          <img src={Spock} alt="Spock" />
        </button>
      </Mao>
    </JogoBonus>
  );
};
