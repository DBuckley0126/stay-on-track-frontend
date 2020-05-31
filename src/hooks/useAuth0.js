import React from 'react';
import {useEffect} from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import {useDispatch} from 'react-redux';
import {authenticationActions} from '../actions/index';

function useAuth0() {
  const dispatch = useDispatch();
  let auth0Client = null;

  useEffect(() => {
    initializeAuth0();
  });

  let config = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    redirect_uri: window.location.origin,
  };

  // initialize the auth0 library
  const initializeAuth0 = async () => {
    auth0Client = await createAuth0Client(config);

    // check to see if they have been redirected after login
    if (window.location.search.includes('code=')) {
      return handleRedirectCallback();
    }

    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;

    if (user) {
      dispatch(
        authenticationActions.syncUser({
          getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
          user,
        }),
      );
    }

    dispatch(
      authenticationActions.updateAuthentication({
        auth0Client,
        isLoading: false,
        isAuthenticated,
        userData: user,
        isGuest: false,
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        logout: (...p) => auth0Client.logout(...p),
      }),
    );

  };

  // handle the authentication callback
  const handleRedirectCallback = async () => {
    await auth0Client.handleRedirectCallback();

    const user = await auth0Client.getUser();

    if (user) {
      dispatch(
        authenticationActions.syncUser({
          getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
          user,
        }),
      );
    }
    dispatch(
      authenticationActions.updateAuthentication({
        userData: user,
        isAuthenticated: true,
        isGuest: false,
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        logout: (...p) => auth0Client.logout(...p),
      }),
    );

    window.history.replaceState({}, document.title, window.location.pathname);
  };
}

export default useAuth0;
