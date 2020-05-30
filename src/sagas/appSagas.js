import {put, call, takeEvery, takeLatest, delay} from 'redux-saga/effects';
import axios from 'axios';

import {sagaActions} from '../actions/index';

export default function* appSagas() {
  yield takeEvery('SAGA_TEST_1', sagaTest1);
}

function* sagaTest1(action) {
  let requestOptions = {};

  let response = false;

  try {
    if (window.location.hostname === 'localhost') {
      requestOptions = {
        method: 'get',
        url: `http://localhost:5000/${action.payload}`,
      };
    } else {
      requestOptions = {
        method: 'get',
        url: `${process.env.HEROKU_URL}/${action.payload}`,
      };
    }
    response = yield axios(requestOptions);
  } catch (error) {
    console.log(error);
  }

  if (response.status === 200) {
    console.log(response.data);

    if (response.data) {
      yield put(sagaActions.updateSagaValue1(response.data.message));
    }
  }
}
