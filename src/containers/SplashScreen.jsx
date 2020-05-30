import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';

import {LoginButton} from '../components/index';

const SplashScreen = () => {
  return (
    <AnimatePresence>
      <Frame id="splash-screen-container">
        <LoginButton />
      </Frame>
    </AnimatePresence>
  );
};

export default SplashScreen;
