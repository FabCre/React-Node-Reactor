import {
  BOSS_ACTION,
  HIDE_SIDE_ATTACK,
  HIDE_FRONT_ATTACK,
  ANGLE_SIDE_ATTACK,
  SET_BOSS_POSITION,
  DISPLAY_SIDE_ATTACK,
  DISPLAY_FRONT_ATTACK,
  DEATH_BOSS_ANIMATION
} from 'src/store/actions/bossActions';

import {
  BOSS_DAMAGE
} from 'src/store/actions/reactorActions';

/**
 * @alias boss_initialState
 * @memberof Reducer
 * @desc Initial state used to set up the app at launch
 */
const initialState = {

  bossStats: {
    pv: 200,
    damage: 20,
    armor: 0
  },
  bossPosition: {
    bossx: 544,
    bossy: 214
  },
  spritePlaying: true,
  bossRepeat: false,
  bossState: 0,
  bossSpeed: 10,
  bossAction: 'Idle',
  frontAttack: false,
  sideAttack: false,
  angle: 0,
};

/**
 * @alias bossReducer
 * @memberof Reducer
 * @param {object} state
 * @param {object} action
 * @desc Set the new state which depend on the action.
 */
const boss = (state = initialState, action = {}) => {
  switch (action.type) {
    /**
     * Change state position of the Boss
     **/
    case SET_BOSS_POSITION:
    {
      return {
        ...state,
        bossPosition:
       {
         bossx: action.bossx,
         bossy: action.bossy
       }
      };
    }
    /**
     * Change state action of the Boss
     **/
    case BOSS_ACTION:
    {
      return {
        ...state,
        bossAction: action.bossAction
      };
    }
    /**
     * Displayes action front of the Boss
     **/
    case DISPLAY_FRONT_ATTACK:
    {
      return {
        ...state,
        frontAttack: true
      };
    }
    /**
     * Hides action front of the Boss
     **/
    case HIDE_FRONT_ATTACK:
    {
      return {
        ...state,
        frontAttack: false
      };
    }
    /**
     * Displayes action side of the Boss
     **/
    case DISPLAY_SIDE_ATTACK: {
      return {
        ...state,
        sideAttack: true
      };
    }
    /**
    * Hides action side of the Boss
    **/
    case HIDE_SIDE_ATTACK: {
      return {
        ...state,
        sideAttack: false
      };
    }
    /**
    * Specified angle attack of the Boss
    **/
    case ANGLE_SIDE_ATTACK: {
      return {
        ...state,
        angle: action.angle
      };
    }
    case BOSS_DAMAGE: {
      return {
        ...state,
        bossStats: {
          pv: state.bossStats.pv - action.reactorDamage,
          damage: state.bossStats.damage,
          armor: state.bossStats.armor
        }
      };
    }
    case DEATH_BOSS_ANIMATION:
    {
      return {
        ...state,
        characterState: 5,
        bossRepeat: state.bossState > 4
      };
    }
    default:
      return state;
  }
};

export default boss;
