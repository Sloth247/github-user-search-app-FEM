import { createContext, useReducer } from 'react';
import ThemeReducer from './ThemeReducer';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, {
    mode: 'light',
  });

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };
  return (
    <ThemeContext.Provider
      value={{
        ...state,
        changeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
