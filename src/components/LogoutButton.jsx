import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logout = useSelector(state => state.user.logout);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const hoverStyle = () => {
    return {
      scale: 1.05,
      shadow: 'rgb(132, 232, 232)',
      backgroundColor: 'rgb(232, 232, 232)',
    };
  };

  if (isAuthenticated) {
    return (
      <Frame
        onClick={() => logout({ returnTo: window.location.origin })}
        id="splash-screen-logout-button"
        whileHover={() => hoverStyle()}
        style={{
          backgroundColor: 'rgb(132, 232, 232)',
          cursor: 'pointer',
        }}
        center>
        Logout
      </Frame>
    );
  }
  return <></>;
};

export default LogoutButton;
