import {
  MOVE,
  STOP,
  ATTACK,
  RETURN_IDLE,
  SET_POSITION,
  HOLE_COLLISION,
  BALL_COLLISION,
  DEATH_ANIMATION,
  DEBUGGER_MATTER_ACTIVE,
  DEBUGGER_MATTER_NOT_ACTIVE
} from 'src/store/actions/reactorActions';

import {
  CHANGE_ROOM,
  GENERATE_ROOM
} from 'src/store/actions/roomActions';

import {
  INIT_QUIZZ,
  CLOSE_MODAL,
  FALSE_ANSWER,
  RESOLVE_QUIZZ_LEVEL1,
  RESOLVE_QUIZZ_LEVEL2,
  RESOLVE_QUIZZ_LEVEL3,
  RESET_QUIZZ_ANSWERED_OPEN_CHEST1,
  RESET_QUIZZ_ANSWERED_OPEN_CHEST2
} from 'src/store/actions/modalActions';

import {
  ATTACK_BOSS
} from 'src/store/actions/bossActions';

/**
 * @alias reactor_initialState
 * @memberof Reducer
 * @desc Initial state used to set up the app at launch
 */
const initialState = {
  debugMatter: false,
  ballVisible: 1,
  quizzAnsweredOpen: 0,
  quizzAnsweredChest1: 0,
  quizzAnsweredChest2: 0,
  quizzState: 0,
  open: true,
  characterState: 0,
  loop: false,
  spritePlaying: true,
  isAttacking: false,
  isAnimated: false,
  isLeaving: false,
  repeat: false,
  projectileDirection: 'todo',
  characterPosition: {
    x: 548,
    y: 594
  },
  characterSpeed: {
    speedX: 0,
    speedY: 0
  },
  stats: {
    pv: 100,
    damage: 10,
    speed: 5
  },
  bonusTracker: []
};

/**
 * @alias reactorReducer
 * @memberof Reducer
 * @param {object} state
 * @param {object} action
 * @desc Set the new state which depend on the action.
 */
const reactor = (state = initialState, action = {}) => {
  switch (action.type) {
    /**
     * Lances the quizz
     **/
    case INIT_QUIZZ:
    {
      return {
        ...state,
        quizzState: action.quizzState
      };
    }
    case DEBUGGER_MATTER_ACTIVE:
    {
      return {
        ...state,
        debugMatter: true
      };
    }
    case DEBUGGER_MATTER_NOT_ACTIVE:
    {
      return {
        ...state,
        debugMatter: false
      };
    }
    /**
     * Change state for state Main Character  when he gives a good answer chest1
     **/
    case RESOLVE_QUIZZ_LEVEL1:
    {
      if (action.bonus === 'life') {
        return {
          ...state,
          quizzAnsweredOpen: 1,
          quizzState: 2,
          stats: {
            pv: state.stats.pv + 20,
            damage: state.stats.damage,
            speed: state.stats.speed
          },
          bonusTracker: action.bonusTracker,
          open: true
        };
      } else {
        return {
          ...state,
          quizzAnsweredOpen: 1,
          quizzState: 2,
          stats: {
            pv: state.stats.pv,
            damage: state.stats.damage + 10,
            speed: state.stats.speed
          },
          bonusTracker: action.bonusTracker,
          open: true
        };
      }
    }
    /**
    /* Change state for state Main Character  when he gives a good answer chest2
   **/
    case RESOLVE_QUIZZ_LEVEL2:
    {
      if (action.bonus === 'life') {
        return {
          ...state,
          quizzAnsweredOpen: 1,
          quizzState: 3,
          stats: {
            pv: state.stats.pv + 30,
            damage: state.stats.damage,
            speed: state.stats.speed
          },
          bonusTracker: action.bonusTracker,
          open: true
        };
      } else {
        return {
          ...state,
          quizzAnsweredOpen: 1,
          quizzState: 3,
          stats: {
            pv: state.stats.pv,
            damage: state.stats.damage + 10,
            speed: state.stats.speed
          },
          open: true
        };
      }
    }
    /**
     * Change state for state Main Character  when he gives a good answer chest3
     **/
    case RESOLVE_QUIZZ_LEVEL3:
    {
      if (action.bonus === 'life') {
        return {
          ...state,
          quizzAnsweredOpen: 1,
          quizzState: 0,
          stats: {
            pv: state.stats.pv + 50,
            damage: state.stats.damage,
            speed: state.stats.speed
          },
          bonusTracker: action.bonusTracker,
          open: false
        };
      } else {
        return {
          ...state,
          quizzAnsweredOpen: 1,
          quizzState: 0,
          stats: {
            pv: state.stats.pv,
            damage: state.stats.damage + 10,
            speed: state.stats.speed
          },
          bonusTracker: action.bonusTracker,
          open: false
        };
      }
    }
    /**
     * Change the modal when you false answer
     **/
    case FALSE_ANSWER:
    {
      return {
        ...state,
        quizzState: action.quizzState,
        open: true
      };
    }
    /**
     * Close the modal when click button in modal
     **/
    case CLOSE_MODAL: {
      return {
        ...state,
        quizzState: action.quizzState,
        open: false
      }
    }
    /**
     * Change state for state Chest when he gives a good answer chest1
     **/
    case RESET_QUIZZ_ANSWERED_OPEN_CHEST1: {
      return {
        ...state,
        open: true,
        quizzAnsweredOpen: 0,
        quizzAnsweredChest1: action.quizzAnsweredChest1
      }
    }
    /**
     * Change state for state Chest when he gives a good answer chest2
     **/
    case RESET_QUIZZ_ANSWERED_OPEN_CHEST2: {
      return {
        ...state,
        open: true,
        quizzAnsweredOpen: 0,
        quizzAnsweredChest2: action.quizzAnsweredChest2
      }
    }
    /**
     * Change state for state Chest when it collides with hole
     **/
    case HOLE_COLLISION: {
      return {
        ...state,
        stats: {
          pv: state.stats.pv - 5,
          damage: state.stats.damage,
          speed: state.stats.speed
        }
      }
    }
    case BALL_COLLISION: {
      return {
        ...state,
        ballVisible: 0,
        stats: {
          pv: state.stats.pv + 10,
          damage: state.stats.damage,
          speed: state.stats.speed
        },
        bonusTracker: [...state.bonusTracker, 'life']
      }
    }
    // ----------------------- PLAYER ACTIONS -----------------------
    case GENERATE_ROOM: {
      return {
        ...state
      };
    }
    /**
     * Change state when main character entered a door
    */
    case CHANGE_ROOM:
    {
      return {
        ...state,
        isLeaving: true
      };
    }
    /**
     * Change state when main character move
    */
    case MOVE:
    {
      return {
        ...state,
        characterState: action.characterState,
        isAnimated: true,
        repeat: action.repeat,
        characterSpeed:
        {
          speedX: action.speedX,
          speedY: action.speedY
        }
      };
    }
    /**
     * Change state when main character stop move
    */
    case STOP:
    {
      return {
        ...state,
        characterSpeed:
        {
          speedX: 0,
          speedY: 0
        }
      };
    }
    /**
     * Change state position of the main character
    */
    case SET_POSITION:
    {
      return {
        ...state,
        characterPosition:
        {
          x: action.x,
          y: action.y
        }
      };
    }
    /**
     * Change state when main character attack
    */
    case ATTACK:
    {
      return {
        ...state,
        characterState: action.characterState,
        isAnimated: true,
        isAttacking: true,
        repeat: action.repeat
      };
    }
    /**
     * Change state for main character no move
    */
    case RETURN_IDLE:
    {
      return {
        ...state,
        characterState: 0,
        isAnimated: false,
        isAttacking: false,
        repeat: false
      };
    }
    /**
     * Change state for main character when receiveDamage
     */
    case ATTACK_BOSS:
    {
      return {
        ...state,
        stats: {
          pv: state.stats.pv - action.bossDamage,
          damage: state.stats.damage,
          speed: state.stats.speed
        }
      };
    }
    case DEATH_ANIMATION:
    {
      return {
        ...state,
        characterState: 16,
        isAnimated: true,
        repeat: false,
        characterSpeed:
        {
          speedX: 0,
          speedY: 0
        }
      };
    }
    default:
      return state;
  }
};

export default reactor;
