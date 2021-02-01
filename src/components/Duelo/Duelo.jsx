import React from 'react';
import './Duelo.css';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Scissors from '../../images/icon-scissors.svg';
import { Mao } from '../Mao';
import { DueloContainer } from '../DueloContainer';
// import { useScore } from '../../context/Score';

const tipos = ['paper', 'rock', 'scissors'];

const definirMao = (p) => {
  if (p === 'paper') return Paper;
  if (p === 'rock') return Rock;
  if (p === 'scissors') return Scissors;
};

export const Duelo = ({ setMao, mao }) => {
  const [maoJogador, setMaoJogador] = React.useState('');
  const [texto, setTexto] = React.useState('');
  // const { score, setScore } = useScore();
  const [score, setScore] = React.useState(0);

  const ScoreContext = React.createContext(score);
  console.log(ScoreContext);
  React.useEffect(() => {
    const sortear = () => {
      const numero = () => Math.floor(Math.random() * (4 - 1));
      let resultado = tipos[numero()];
      return setMaoJogador(resultado);
    };
    sortear();
  }, []);
  function pontos(p) {
    if (p) setScore((score += 1));
    else setScore((score -= 1));
  }
  React.useEffect(() => {
    const verificarGanhador = () => {
      const win =
        (mao === 'paper' && maoJogador === 'rock') ||
        (mao === 'rock' && maoJogador === 'scissors') ||
        (mao === 'scissors' && maoJogador === 'paper');
      const tied =
        (mao === 'paper' && maoJogador === 'paper') ||
        (mao === 'rock' && maoJogador === 'rock') ||
        (mao === 'scissors' && maoJogador === 'scissors');
      const lose =
        (mao === 'paper' && maoJogador === 'scissors') ||
        (mao === 'rock' && maoJogador === 'paper') ||
        (mao === 'scissors' && maoJogador === 'rock');
      if (win) {
        setTexto('YOU WIN');
        pontos(true);
      }
      if (tied) {
        setTexto('TIED');
      }
      if (lose) {
        setTexto('YOU LOSE');
        pontos(false);
      }
    };
    verificarGanhador();
  }, [mao, maoJogador]);
  return (
    <DueloContainer>
      <ScoreContext.Provider value={score}>
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
      </ScoreContext.Provider>
    </DueloContainer>
  );
};
