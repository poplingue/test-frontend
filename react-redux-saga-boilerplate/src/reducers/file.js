import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const dropZoneState = {
  file: false,
};

export default {
  file: handleActions(
    {
      [ActionTypes.SEND_USER_FILE]: state => immutable(state, {}),
    },
    dropZoneState,
  ),
};
