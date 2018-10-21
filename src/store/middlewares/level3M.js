import store from 'src/store';

import {
  RESOLVE_QUIZZ_LEVEL3
} from 'src/store/actions/modalActions';

/**
 * @alias level3Middleware
 * @memberof Middleware
 * @desc Create a random bonus for the character Reactor when the answer is correct.
 */
const resolveQuizzLevel3 = () => {
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

  store.dispatch({type: RESOLVE_QUIZZ_LEVEL3, bonus, bonusTracker});
}

export { resolveQuizzLevel3 };