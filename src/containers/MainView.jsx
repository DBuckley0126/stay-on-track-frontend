import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';

import {LoginButton, GuestLoginButton} from '../components/index';

const MainView = () => {
  const userSynced = useSelector(state => state.user.synced);

  return (
    <Frame
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'grey',
      }}
      id="main-view-container"></Frame>
  );
};

export default MainView;
