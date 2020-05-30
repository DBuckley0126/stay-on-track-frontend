import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';

import {LoginButton, LogoutButton} from '../components/index';

const SplashScreen = () => {
  return (
    <AnimatePresence>
      <Frame id="splash-screen-container">
        <LoginButton />
        <LogoutButton />
      </Frame>
    </AnimatePresence>
  );
};

export default SplashScreen;
