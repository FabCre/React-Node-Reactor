import { SET_BALL_POSITION } from 'src/store/actions/ballActions';

/**
 * @alias ball_initialState
 * @memberof Reducer
 * @desc Initial state used to set up the app at launch
 */
const initialState = {
  ballPosition: {
    x: 170,
    y: 200
  }
};

/**
 * @alias ballReducer
 * @memberof Reducer
 * @param {object} state
 * @param {object} action
 * @desc Set the new state which depend on the action.
 */
const ball = (state = initialState, action = {}) => {
  switch (action.type) {
    // Changes the position of the ball
    case SET_BALL_POSITION:
    {
      return {
        ...state,
        ballPosition: {
          x: action.x,
          y: action.y
        }
      };
    }
    default:
      return state;
  }
};

export default ball;
