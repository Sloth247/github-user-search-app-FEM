import './Footer.scss';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Footer() {
  const { mode } = useContext(ThemeContext);
  const urlFEM = 'https://www.frontendmentor.io?ref=challenge';
  const urlMe = 'https://www.frontendmentor.io/profile/Sloth247';
  return (
    <div className={`attribution ${mode}`}>
      Challenge by{' '}
      <a href={urlFEM} target="_blank" rel="noopener noreferrer">
        Frontend Mentor
      </a>
      . Coded by <a href={urlMe}>Yuko Horita</a>.
    </div>
  );
}
