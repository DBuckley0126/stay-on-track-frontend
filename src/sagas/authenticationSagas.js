import {delay} from 'redux-saga';
import {put, call, takeEvery, takeLatest, select} from 'redux-saga/effects';
import axios from 'axios';

import {authenticationActions} from '../actions/index';

export default function* authenticationSagas() {
  yield takeLatest('SYNC_USER', syncUser);
}

function* syncUser(action) {
  let requestOptions = null;
  let response = null;

  try {
    const JWT = yield action.payload.getTokenSilently();
    if (window.location.hostname === 'localhost') {
      requestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
        url: `http://localhost:5000/api/v1/user/sync`,
        data: {user: action.payload.user},
      };
    } else {
      requestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
        url: `${process.env.HEROKU_URL}/api/v1/user/sync`,
        body: {user: action.payload.user},
      };
    }
 
    response = yield axios(requestOptions);

    if (response.status === 200) {
      yield put(
        authenticationActions.updateAuthentication({
          synced: true,
          persisted: response.data.persisted,
        }),
      );
    } else {
      throw new Error();
    }

  } catch (error) {
    console.log(error);
    yield put(authenticationActions.updateAuthentication({synced: false}));
  }
}
