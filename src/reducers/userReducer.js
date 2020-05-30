const initialState = {
  JWT: null,
  isLoading: true,
  isAuthenticated: false,
  user: null,
  loginWithRedirect: null,
  getTokenSilently: null,
  getIdTokenClaims: null,
  logout: null,
  synced: null,
  persisted: null,
  apiToken: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_AUTHENTICATION':
      return {...state, ...action.payload};
    default:
      return state;
  }
}
