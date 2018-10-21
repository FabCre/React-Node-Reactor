/**
 * @namespace Middleware
 * @desc All Containers of Reactor
 */
import {
  NEW_BOSS_ACTION,
  BOSS_ACTION
} from 'src/store/actions/bossActions';

/**
 * @alias bossMiddleware
 * @memberof Middleware
 * @param {object} store
 * @param {object} next
 * @param {object} action
 * @desc Dispatch new random boss action on call
 */
const boss = store => next => (action) => {
  // Create a random number which pass in attackName action.
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const attackName = getRandomInt(0, 2);

  switch (action.type) {
    case NEW_BOSS_ACTION: {
      const previousBossAction = action.bossAction;
      const attacks = ['Idle', 'Attack'];
      let bossAction = attacks[attackName];
      if (previousBossAction === 'Idle') {
        bossAction = attacks['Attack'];
      }
      // TODO V2 add third value to move

      store.dispatch({type: BOSS_ACTION, bossAction});
      return bossAction;
    }
  };

  next(action);
};

export default boss;
