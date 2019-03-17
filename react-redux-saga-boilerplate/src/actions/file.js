// @flow
/**
 * @module Actions/File
 * @desc File Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { sendUserFile: sendFile } = createActions({
  [ActionTypes.SEND_USER_FILE]: file => ({ file }),
});
