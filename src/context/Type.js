import React, {createContext, useState, useContext } from 'react';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Scissors from '../images/icon-scissors.svg';
import Spock from '../images/icon-spock.svg';
import Lizard from '../images/icon-lizard.svg';
import LogoC from '../images/logo.svg';
import LogoB from '../images/logo-bonus.svg';
import Pentagon from '../images/bg-pentagon.svg';
import Triangle from '../images/bg-triangle.svg';

const TypeContext = createContext()

export const types = [
  { 
    name: 'classico',
    maos: ['paper', 'rock', 'scissors'],
    maosSvg: {Paper, Rock, Scissors},
    logo: LogoC,
    fundo: Triangle,
  },
  {
    name: 'bonus',
    maos: ['paper', 'rock', 'scissors','spock','lizard'],
    maosSvg: {Paper, Rock, Scissors, Spock, Lizard},
    logo: LogoB,
    fundo: Pentagon,
  }
]

const TypeProvider=({children})=>{
  const [type, setType] = useState(null);

  return (
      <TypeContext.Provider
        value={{type, setType}}>
          {children}
      </TypeContext.Provider>
  )
}
export const useType = ()=> {
    const { type, setType} = useContext(TypeContext)

    return { type, setType}
}

export {TypeContext,TypeProvider}