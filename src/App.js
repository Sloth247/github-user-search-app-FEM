import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import ThemeContext from './context/ThemeContext';
import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={`App ${mode}`}>
      <div className="inner-container">
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
