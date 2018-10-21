import store from 'src/store';
import {
  RESET_QUIZZ_ANSWERED_OPEN_CHEST2,
} from 'src/store/actions/modalActions';

/**
 * @alias resetQuizzAnsweredOpenChest2Middleware
 * @memberof Middleware
 * @param {number} quizzAnsweredChest2
 * @desc Dispatch a new quizzState to display the opened chest.
 */
const resetQuizzAnsweredOpenChest2 = (quizzAnsweredChest2) => {
  store.dispatch({type: RESET_QUIZZ_ANSWERED_OPEN_CHEST2, quizzAnsweredChest2});
}

export { resetQuizzAnsweredOpenChest2 };
