import { useState, useContext } from 'react';
import './UserSearch.scss';
import Magnifier from '../assets/icon-search.svg';
import GithubContext from '../context/GithubContext';
import ThemeContext from '../context/ThemeContext';

export default function UserSearch() {
  const { getUser, error, setError, deleteError } = useContext(GithubContext);
  const { mode } = useContext(ThemeContext);
  const [text, setText] = useState();

  const handleInput = (e) => {
    if (error) {
      deleteError();
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '' || error) {
      setError();
    } else {
      getUser(text);
      setText('');
    }
  };
  return (
    <div className="input-container">
      <form className={`form ${mode}`} onSubmit={handleSubmit}>
        <label htmlFor="search" className="input-label">
          <span className="sr-only">Search a GitHub account by username</span>
          <img
            src={Magnifier}
            alt=""
            aria-hidden="true"
            className="input-img"
          />
          <input
            className={`input-field ${mode}`}
            type="text"
            placeholder={error ? '' : 'Search GitHub username...'}
            id="search"
            value={text}
            onChange={handleChange}
            onInput={handleInput}
          />
        </label>
        {error && <p className="error-msg">No results</p>}
        <button className="input-btn">Search</button>
      </form>
    </div>
  );
}
