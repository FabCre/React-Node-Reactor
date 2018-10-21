import store from 'src/store';

import {
  RESOLVE_QUIZZ_LEVEL2
} from 'src/store/actions/modalActions';

/**
 * @alias level2Middleware
 * @memberof Middleware
 * @desc Create a random bonus for the character Reactor when the answer is correct.
 */
const resolveQuizzLevel2 = () => {
  const bonusTracker = store.getState().reactor.bonusTracker;

  const bonusArray = ['life', 'damage'];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const bonusName = getRandomInt(0, 2);

  const bonus = bonusArray[bonusName];

  bonusTracker.push(bonus);

  store.dispatch({type: RESOLVE_QUIZZ_LEVEL2, bonus, bonusTracker});
}
export { resolveQuizzLevel2 };