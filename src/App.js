import React  from 'react';

import './App.css'
import Main from './components/Main';

import { Header } from './components/Header/Header';
import { Roule } from './components/Roule';
import ScoreProvider, {useScore, ScoreContext} from './context/Score'


function App() {
  // const {score} = React.useContext(ScoreContext)
  const context = useScore()
console.log(context);
  return (
      <ScoreProvider>
        <Header />
        <Main/>
        <Roule>Roule</Roule>
      </ScoreProvider>
  );
}

export default App;
