import React, {createContext, useState, useContext } from 'react';


const ScoreContext = createContext();

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);

  return (
      <ScoreContext.Provider
        value={{
          score, 
          setScore
        }}>
          {children}
      </ScoreContext.Provider>
  )
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { count, setCount } = context;
  return { count, setCount };
}


