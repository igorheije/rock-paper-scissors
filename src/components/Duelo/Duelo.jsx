import React from 'react';
import './Duelo.css';

import { Mao } from '../Mao';
import { DueloContainer } from '../DueloContainer';
import { useScore } from '../../context/Score';

import { useType } from '../../context/Type';

export const Duelo = ({ setMao, mao }) => {
  const { type } = useType();
  const { Paper, Rock, Scissors, Lizard, Spock } = type.maosSvg;

  const [maoJogador, setMaoJogador] = React.useState('');
  const [texto, setTexto] = React.useState('');
  const { setScore } = useScore();

  const definirMao = (p) => {
    if (p === 'paper') return Paper;
    if (p === 'rock') return Rock;
    if (p === 'scissors') return Scissors;
    if (p === 'spock') return Spock;
    if (p === 'lizard') return Lizard;
  };
  React.useEffect(() => {
    const sortear = () => {
      const numero = () => Math.floor(Math.random() * type.maos.length);
      let resultado = type.maos[numero()];
      return setMaoJogador(resultado);
    };
    sortear();
  }, [type.maos]);
  React.useEffect(() => {
    const pontos = (p) => {
      if (p) setScore((sc) => sc + 1);
      else setScore((sc) => sc - 1);
    };

    const verificarGanhador = () => {
      if (type.name === 'bonus') {
        const win =
          (mao === 'paper' && maoJogador === 'rock') ||
          (mao === 'rock' && maoJogador === 'lizard') ||
          (mao === 'scissors' && maoJogador === 'paper') ||
          (mao === 'lizard' && maoJogador === 'spock') ||
          (mao === 'spock' && maoJogador === 'scissors');
        const lose =
          (mao === 'paper' && maoJogador === 'scissors') ||
          (mao === 'rock' && maoJogador === 'paper') ||
          (mao === 'lizard' && maoJogador === 'rock') ||
          (mao === 'spock' && maoJogador === 'lizard') ||
          (mao === 'scissors' && maoJogador === 'spock');
        if (win) {
          setTexto('YOU WIN');
          pontos(true);
        } else if (lose) {
          setTexto('YOU LOSE');
          pontos(false);
        } else {
          setTexto('TIED');
        }
      } else {
        const win =
          (mao === 'paper' && maoJogador === 'rock') ||
          (mao === 'rock' && maoJogador === 'scissors') ||
          (mao === 'scissors' && maoJogador === 'paper');
        const lose =
          (mao === 'paper' && maoJogador === 'scissors') ||
          (mao === 'rock' && maoJogador === 'paper') ||
          (mao === 'scissors' && maoJogador === 'rock');
        if (win) {
          setTexto('YOU WIN');
          pontos(true);
        } else if (lose) {
          setTexto('YOU LOSE');
          pontos(false);
        } else {
          setTexto('TIED');
        }
      }
    };
    verificarGanhador();
  }, [mao, maoJogador, type.name, setScore]);

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
