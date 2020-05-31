import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';
import {authenticationActions} from '../actions/index';

const GuestLoginButton = () => {
  const dispatch = useDispatch();
  const userAuthenticated = useSelector(state => state.user.isAuthenticated);

  const hoverStyle = () => {
    return {
      scale: 1.05,
      shadow: 'rgb(132, 232, 232)',
      backgroundColor: 'rgb(232, 232, 232)',
    };
  };

  if (!userAuthenticated) {
    return (
      <Frame
        onClick={() => dispatch(authenticationActions.loginAsGuest())}
        id="splash-screen-guest-login-button"
        whileHover={() => hoverStyle()}
        style={{
          backgroundColor: 'rgb(132, 232, 232)',
          cursor: 'pointer',
          margin: 200,
        }}
        center>
        Guest Login
      </Frame>
    );
  }

  return <></>;
};

export default GuestLoginButton;
