import React from 'react';
import ReactDOM from 'react-dom';
import { GithubProvider } from './context/GithubContext';
import { ThemeProvider } from './context/ThemeContext';

import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
