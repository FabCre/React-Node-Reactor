export const SET_BALL_POSITION = 'actions/SET_BALL_POSITION';

 /**
  * @alias setBallPosition
  * @param {number} x
  * @param {number} y
  * @memberof Action
  * @desc Set ball position.
  */
const setBallPosition = (x, y) => ({
  type: SET_BALL_POSITION,
  x,
  y
});

export { setBallPosition };