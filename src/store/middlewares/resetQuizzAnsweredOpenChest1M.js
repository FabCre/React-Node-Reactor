import store from 'src/store';
import {
  RESET_QUIZZ_ANSWERED_OPEN_CHEST1,
} from 'src/store/actions/modalActions';

/**
 * @alias resetQuizzAnsweredOpenChest1Middleware
 * @memberof Middleware
 * @param {number} quizzAnsweredChest1
 * @desc Dispatch a new quizzState to display the opened chest.
 */
const resetQuizzAnsweredOpenChest1 = (quizzAnsweredChest1) => {
  store.dispatch({type: RESET_QUIZZ_ANSWERED_OPEN_CHEST1, quizzAnsweredChest1});
}

export { resetQuizzAnsweredOpenChest1 };

