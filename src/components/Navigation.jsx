import { Link } from 'react-router-dom';
import Moon from '../components/svg/Moon';
import Sun from '../components/svg/Sun';
import './Navigation.scss';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Navigation() {
  const { mode, changeMode } = useContext(ThemeContext);

  function handleToggle() {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  }
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className={`header__logo ${mode}`}>
          devfinder
        </Link>
        <button className={`header__theme-btn ${mode}`} onClick={handleToggle}>
          <span>{mode === 'dark' ? 'Light' : 'Dark'}</span>
          {mode === 'dark' ? <Sun /> : <Moon />}
        </button>
      </nav>
    </header>
  );
}
