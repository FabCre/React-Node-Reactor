/**
 * @namespace Reducer
 * @desc All Reducers of Reactor
 */
import { ERROR_CURRENT_USER } from 'src/store/actions/errorsActions';

import { SET_CURRENT_USER } from 'src/store/actions/authActions';

import { isEmpty } from 'lodash';

/**
 * @alias auth_initialState
 * @memberof Reducer
 * @desc Initial state used to set up the app at launch
 */
const initialState = {
  message: null,
  open: false,
  isAuthenticated: false,
  user: {}
};

/**
 * @alias authReducer
 * @memberof Reducer
 * @param {object} state
 * @param {object} action
 * @desc Set the new state which depend on the action.
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    // Display a modal if there is an error during the login or the signup
    case ERROR_CURRENT_USER:
      return {
        ...state,
        message: action.message,
        open: true
      };
    default:
      return state;
  }
};

export default authReducer;
