import React, {createContext, useState, useContext } from 'react';

const ThemeContext = createContext()


const ThemeProvider=({children})=>{
  const [theme, setTheme] = useState(false);

  return (
      <ThemeContext.Provider
        value={{theme, setTheme}}>
          {children}
      </ThemeContext.Provider>
  )
}
// export const useScore = ()=> {
//     const context = useContext(ScoreContext)

//     return context
// }

export {ThemeContext,ThemeProvider}