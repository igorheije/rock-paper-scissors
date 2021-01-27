import React from 'react';
import './Duelo.css';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Scissors from '../../images/icon-scissors.svg';

const tipos = [Paper, Rock, Scissors];

export const Duelo = ({ setMao, mao }) => {
  const sortear = () => {
    const numero = Math.floor(Math.random() * (4 - 1));
    const resultado = tipos[numero];
    console.log('mao', mao);

    return resultado;
  };
  return (
    <div className="duelo">
      <div className="jogador">
        <h3>YOU PICKED</h3>
        <button>
          <img src={mao} alt={mao} />
        </button>
      </div>
      <div className="play">
        <h1>Teste</h1>
        <button onClick={() => setMao(undefined)}>PLAY AGAIN</button>
      </div>
      <div className="oponente">
        <h3>THE HOUSE PICKED</h3>
        <button>
          <img src={sortear()} alt="Paper" />
        </button>
      </div>
    </div>
  );
};
