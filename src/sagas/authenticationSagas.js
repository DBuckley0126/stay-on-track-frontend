import {delay} from 'redux-saga';
import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {auth0Actions} from '../actions/index';

export default function* authenticationSagas() {
  yield takeLatest('SYNC_USER', syncUser);
}

function* syncUser(action) {
  let requestOptions = null;
  let response = null;
  // let configurationObject = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ JWT: action.payload })
  // };

  try {
    if (window.location.hostname === 'localhost') {
      requestOptions = {
        method: 'post',
        url: `http://localhost:3000/user/create`,
        body: JSON.stringify({JWT: action.payload}),
      };
    } else {
      requestOptions = {
        method: 'post',
        url: `${process.env.HEROKU_URL}/user/create`,
        body: JSON.stringify({JWT: action.payload}),
      };
    }

    response = yield axios(requestOptions);

    if (response.status === 200) {
      yield put(
        auth0Actions.updateAuthentication({
          synced: true,
          persisted: response.data.persisted,
          apiToken: response.data.api_token,
        }),
      );
    } else {
      throw new Error();
    }

  } catch (error) {
    console.log(error);
    yield put(auth0Actions.updateAuthentication({synced: false}));
  }
}
