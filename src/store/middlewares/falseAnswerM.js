import store from 'src/store';

import {
  FALSE_ANSWER
} from 'src/store/actions/modalActions';

/**
 * @alias falseAnswerMiddleware
 * @memberof Middleware
 * @param {object} quizzState
 * @desc Dispatch a new quizzState to display the false answer modal.
 */
export const falseAnswer = (quizzState) => {
  store.dispatch({type: FALSE_ANSWER, quizzState});
};