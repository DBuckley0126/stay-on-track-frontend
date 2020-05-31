const initialState = {
  auth0Client: null,
  isLoading: false,
  isAuthenticated: false,
  userData: null,
  isGuest: null,
  loginWithRedirect: null,
  getTokenSilently: null,
  getIdTokenClaims: null,
  logout: null,
  synced: null,
  persisted: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_AUTHENTICATION':
      return {...state, ...action.payload};
    case 'LOGIN_AS_GUEST':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        userData: {},
        isGuest: true,
        synced: true,
        persisted: false,
      };
    default:
      return state;
  }
}
