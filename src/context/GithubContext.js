import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [user, setUser] = useState('bradtraversy');
  // const [loading, setLoading] = useState(true);

  const initialState = {
    user: {},
    error: false,
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data.items);

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data.items,
  //   });
  // };

  const getUser = async (text) => {
    setLoading();
    try {
      const response = await fetch(`${GITHUB_URL}/users/${text}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    } catch (err) {
      console.error(err);
      setError();
    }
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const setError = () => dispatch({ type: 'SET_ERROR' });

  const deleteError = () => dispatch({ type: 'DELETE_ERROR' });

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        user: state.user,
        loading: state.loading,
        // searchUsers,
        error: state.error,
        getUser,
        setError,
        deleteError,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
