import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';

import {LoginButton, GuestLoginButton, Timer} from '../components/index';

const MainView = () => {
  const userSynced = useSelector(state => state.user.synced);

  return (
    <Frame
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'grey',
      }}
      id="main-view-container">
      <Timer
        colorSet={{primary: '#fa1beb', secondary: '#e86de0'}}
        maxTime={100}
        initialCurrentGoneTime={90}
      />
    </Frame>
  );
};

export default MainView;
