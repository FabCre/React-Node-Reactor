import {
  CHECK_KEYS,
  MOVE,
  ATTACK,
  DEBUGGER_MATTER_ACTIVE,
  DEBUGGER_MATTER_NOT_ACTIVE
} from 'src/store/actions/reactorActions';

/**
 * @alias level1Middleware
 * @memberof Middleware
 * @param {object} store
 * @param {object} next
 * @param {object} action
 * @desc Dispatch next action based on listener passed as parameter
 */
const reactor = store => next => (action) => {
  switch (action.type) {
    case CHECK_KEYS: {
      // Movement keypress
      let { characterState, repeat } = store.getState().reactor;
      let speedX = 0;
      let speedY = 0;

      // movement animations
      const keys = action.keys;

      // Debugger Matter
      if (keys.isDown(keys.DEBUGGER_MATTER_ACTIVE)) {
        store.dispatch({type: DEBUGGER_MATTER_ACTIVE});
      }
      if (keys.isDown(keys.DEBUGGER_MATTER_NOT_ACTIVE)) {
        store.dispatch({type: DEBUGGER_MATTER_NOT_ACTIVE});
      }
      // Movement up
      if (keys.isDown(keys.UP)) {
        speedY = -2.5;
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 1;
          repeat = characterState < 1;
        }
        store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // Movement down
      if (keys.isDown(keys.DOWN)) {
        speedY = 2.5;
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 5;
          repeat = characterState < 1;
        }
        store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // Movement left
      if (keys.isDown(keys.LEFT)) {
        speedX = -2.5;
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 7;
          repeat = characterState < 1;
        }
        store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // Movement right
      if (keys.isDown(keys.RIGHT)) {
        speedX = 2.5;
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 3;
          repeat = characterState < 1;
        }
        store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // movement upper left
      if (keys.isDown(keys.LEFT) && keys.isDown(keys.UP)) {
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 8;
          repeat = characterState < 1;
        }
        return store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // movement upper right
      if (keys.isDown(keys.RIGHT) && keys.isDown(keys.UP)) {
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 2;
          repeat = characterState < 1;
        }
        return store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // movement lower left
      if (keys.isDown(keys.LEFT) && keys.isDown(keys.DOWN)) {
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 6;
          repeat = characterState < 1;
        }
        return store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }
      // movement lower right
      if (keys.isDown(keys.RIGHT) && keys.isDown(keys.DOWN)) {
        if (keys.isDown(keys.ATTACK_RIGHT)) {
          characterState = 14;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_LEFT)) {
          characterState = 15;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_UP)) {
          characterState = 13;
          repeat = false;
        } else if (keys.isDown(keys.ATTACK_DOWN)) {
          characterState = 12;
          repeat = false;
        } else {
          characterState = 4;
          repeat = characterState < 1;
        }
        return store.dispatch({type: MOVE, speedX, speedY, characterState, repeat});
      }

      // Attack animations
      if (keys.isDown(keys.ATTACK_UP)) {
        characterState = 13;
        repeat = false;
        store.dispatch({type: ATTACK, characterState, repeat});
      }
      if (keys.isDown(keys.ATTACK_DOWN)) {
        characterState = 12;
        repeat = false;
        store.dispatch({type: ATTACK, characterState, repeat});
      }
      if (keys.isDown(keys.ATTACK_LEFT)) {
        characterState = 15;
        repeat = false;
        store.dispatch({type: ATTACK, characterState, repeat});
      }
      if (keys.isDown(keys.ATTACK_RIGHT)) {
        characterState = 14;
        repeat = false;
        store.dispatch({type: ATTACK, characterState, repeat});
      }
      break;
    }
  };

  next(action);
};

export default reactor;
