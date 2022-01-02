import spinner from '../assets/spinner.gif';
import './Loading.scss';
import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

export default function Spinner() {
  const { loading } = useContext(GithubContext);
  return (
    <div
      className="loading-msg-container"
      aria-live="assertive"
      aria-busy={loading ? true : false}
    >
      <h2 className="loading-msg">
        Loading...
        <img className="spinner" src={spinner} alt="Loading..." />
      </h2>
    </div>
  );
}
