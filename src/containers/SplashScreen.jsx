import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';

import {LoginButton, GuestLoginButton} from '../components/index';

const SplashScreen = () => {
  return (
    <AnimatePresence>
      <Frame id="splash-screen-container">
        <LoginButton />
        <GuestLoginButton />
      </Frame>
    </AnimatePresence>
  );
};

export default SplashScreen;
