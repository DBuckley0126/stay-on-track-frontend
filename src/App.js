import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Frame, AnimatePresence} from 'framer';
import {appActions} from './actions/index';

import {useAuth0} from './hooks/index';
import {LogoutButton} from './components/index';
import {SplashScreen, MainView} from './containers/index';

const App = () => {
  useAuth0();
  const dispatch = useDispatch();
  const userSynced = useSelector(state => state.user.synced);
  console.log('User sycned' + userSynced);

  return (
    <div className="App">
      <AnimatePresence>{!userSynced && <SplashScreen />}</AnimatePresence>
      {/* <Frame onClick={() => dispatch(appActions.updateTest1('test_va'))}>
        Test button
      </Frame>
      <Frame
        style={{marginTop: 400}}
        onClick={() => dispatch(appActions.sagaTest1('api/v1/'))}>
        Test button2
      </Frame>
      <Frame
        style={{marginLeft: 400}}
        onClick={() => dispatch(appActions.sagaTest1('api/v1/'))}>
        Test button2
      </Frame> */}
      <AnimatePresence>{userSynced && <MainView />}</AnimatePresence>

      <LogoutButton></LogoutButton>
    </div>
  );
};

export default App;
