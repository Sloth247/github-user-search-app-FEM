const GithubReducer = (state, action) => {
  switch (action.type) {
    // case 'GET_USERS':
    //   return {
    //     ...state,
    //     user: action.payload,
    //     loading: false,
    //   };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'DELETE_ERROR':
      return {
        ...state,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};
export default GithubReducer;
