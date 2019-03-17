/**
 * @module Sagas/File
 * @desc File
 */

import { all, put, takeLatest, call } from 'redux-saga/effects';
import postRequest from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Send Binary File
 */
export function* send({ payload: file }) {
  try {
    if (file == null) {
      throw new Error('Empty file');
    }

    const binary = file.getAsBinary();
    const response = yield call(postRequest, 'https://fhirtest.uhn.ca/baseDstu3/Binary', {
      binary,
    });

    yield put({
      type: ActionTypes.SEND_USER_FILE_SUCCESS,
      payload: { response },
    });
  } catch (err) {
    yield put({
      type: ActionTypes.SEND_USER_FILE_FAILURE,
      payload: err,
    });
  }
}

/**
 * File Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.SEND_USER_FILE, send)]);
}
