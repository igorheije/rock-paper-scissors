import React from 'react';

import './App.css'
import { Duelo } from './components/Duelo/Duelo'
import { Header } from './components/Header/Header'
import { Original } from './components/Original/Original'
import { Roule } from './components/Roule/Roule'



function App() {

  const [mao, setMao] = React.useState(undefined);
  const [score, setScore] = React.useState(0);


  return (
    <div className="App">
      <Header score={score}/>
      {
      mao!==''&&mao!==undefined? 
      <Duelo setMao={setMao} mao={mao}
      />  
      :
      <Original setMao={setMao} 
      />
      }
      <Roule/>
    </div>
  );
}

export default App;
