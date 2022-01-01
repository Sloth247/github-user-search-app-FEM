import './NotFound.scss';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function NotFound() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={`not-found ${mode}`}>
      <p>Oops!</p>
      <h2>User Not Found</h2>
    </div>
  );
}
