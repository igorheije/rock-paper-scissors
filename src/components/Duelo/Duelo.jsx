import React from 'react';
import './Duelo.css';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Scissors from '../../images/icon-scissors.svg';
import { Mao } from '../Mao';
import { DueloContainer } from '../DueloContainer';

const tipos = ['paper', 'rock', 'scissors'];

const definirMao = (p) => {
  if (p === 'paper') return Paper;
  if (p === 'rock') return Rock;
  if (p === 'scissors') return Scissors;
};

export const Duelo = ({ setMao, mao, setScore, score }) => {
  const [maoJogador, setMaoJogador] = React.useState('');
  const [texto, setTexto] = React.useState('');

  React.useEffect(() => {
    const sortear = () => {
      const numero = () => Math.floor(Math.random() * (4 - 1));
      let resultado = tipos[numero()];
      return setMaoJogador(resultado);
    };
    sortear();
  }, []);
  const verificarGanhador = (q) => {
    const win =
      (mao === 'paper' && q === 'rock') ||
      (mao === 'rock' && q === 'scissors') ||
      (mao === 'scissors' && q === 'paper');
    const tied =
      (mao === 'paper' && q === 'paper') ||
      (mao === 'rock' && q === 'rock') ||
      (mao === 'scissors' && q === 'scissors');
    const lose =
      (mao === 'paper' && q === 'scissors') ||
      (mao === 'rock' && q === 'paper') ||
      (mao === 'scissors' && q === 'rock');
    if (win) {
      setTexto('YOU WIN');
      setScore((score += 1));
    }
    if (tied) {
      setTexto('TIED');
    }
    if (lose) {
      setTexto('YOU LOSE');
      setScore((score -= 1));
    }
  };
  React.useEffect(() => {
    verificarGanhador(maoJogador);
  }, [maoJogador]);
  return (
    <DueloContainer>
      <div className="jogador">
        <h3>YOU PICKED</h3>
        <Mao mao={mao}>
          <button>
            <img src={definirMao(mao)} alt={mao} />
          </button>
        </Mao>
      </div>
      <div className="play">
        <h1>{texto}</h1>
        <button
          onClick={() => {
            setMao(undefined);
            setMaoJogador('');
          }}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="oponente">
        <h3>THE HOUSE PICKED</h3>
        <Mao mao={maoJogador}>
          <button>
            <img src={definirMao(maoJogador)} alt={maoJogador} />
          </button>
        </Mao>
      </div>
    </DueloContainer>
  );
};
