import React from 'react';
import './App.css'

import  {ScoreProvider} from './context/Score'
import {  TypeProvider } from './context/Type';
import Principal from './components/Principal';

function App() {
 
  
  return (
    <ScoreProvider>
      <TypeProvider>
        <div className="App">
          <Principal/>
        </div>
      </TypeProvider>
    </ScoreProvider>
  );
}

export default App;
