export const CHECK_KEYS = 'actions/CHECK_KEYS';
export const MOVE = 'actions/MOVE';
export const STOP = 'actions/STOP';
export const ATTACK = 'actions/ATTACK';
export const RETURN_IDLE = 'actions/RETURN_IDLE';
export const CHARACTER_POSITION = 'actions/CHARACTER_POSITION';
export const SET_POSITION = 'actions/SET_POSITION';
export const HOLE_COLLISION = 'actions/HOLE_COLLISION';
export const BALL_COLLISION = 'actions/BALL_COLLISION';
export const DEBUGGER_MATTER_ACTIVE = 'actions/DEBUGGER_MATTER_ACTIVE';
export const DEBUGGER_MATTER_NOT_ACTIVE = 'actions/DEBUGGER_MATTER_NOT_ACTIVE';
export const BOSS_DAMAGE = 'actions/BOSS_DAMAGE';
export const DEATH_ANIMATION = 'actions/DEATH_ANIMATION';

/**
 * @alias deathAnimation
 * @memberof Action
 * @desc Triggers main character death animation and calls to gameOver Route
 */
const deathAnimation = () => ({
  type: DEATH_ANIMATION
});

export { deathAnimation };

/**
 * @alias bossDamage
 * @memberof Action
 * @desc Triggers main character damage dealing function (here aimed at boss life)
 */ 
const bossDamage = (reactorDamage) => ({
  type: BOSS_DAMAGE,
  reactorDamage
});

export { bossDamage };

/**
 * @alias move
 * @param {number} speedX
 * @param {number} speedY
 * @param {number} characterState
 * @param {bool} repeat
 * @memberof Action
 * @desc Triggers main character movement based on parameters provided
 */
const move = (speedX, speedY, characterState, repeat) => ({
  type: MOVE,
  speedX,
  speedY,
  characterState,
  repeat
});

export { move };

/**
 * @alias stopBody
 * @memberof Action
 * @desc Stop main character movement trough matter.js
 */
const stopBody = () => ({
  type: STOP
});

export { stopBody };

/**
 * @alias setPosition
 * @param {number} x
 * @param {number} y
 * @memberof Action
 * @desc Set character position with provided parameters
 */ 
const setPosition = (x, y) => ({
  type: SET_POSITION,
  x,
  y
});

export { setPosition };

/**
 * @alias attack
 * @memberof Action
 * @param {number} characterState
 * @param {bool} repeat
 * @desc Triggers main character attack animation
 */ 
const attack = (characterState, repeat) => ({
  type: ATTACK,
  characterState,
  repeat
});

export { attack };

/**
 * @alias checkKeys
 * @memberof Action
 * @param {object} keys
 * @desc Trigger current pressed keys (if any) verification, trough the listener passed in parameters
 */
const checkKeys = (keys) => ({
  type: CHECK_KEYS,
  keys
});

export { checkKeys };

/**
 * @alias returnIdle
 * @memberof Action
 * @desc Triggers main character idle animation if conditions are met
 */
const returnIdle = () => ({
  type: RETURN_IDLE
});

export { returnIdle };

/**
 * @alias holeCollision
 * @memberof Action
 * @desc Triggers main character collision with trap (life loss, invincibility frame)
 */
const holeCollision = () => ({
  type: HOLE_COLLISION
});

export { holeCollision };

/**
 * @alias ballCollision
 * @memberof Action
 * @desc Triggers main character/ball collision (apply forces on ball)
 */
const ballCollision = () => ({
  type: BALL_COLLISION
});

export { ballCollision };

/**
 * @alias debuggerMatterActive
 * @memberof Action
 * @desc Display matter.js logic overlay (canvas rendered trough matter.js)
 */
const debuggerMatterActive = () => ({
  type: DEBUGGER_MATTER_ACTIVE
});

export { debuggerMatterActive };

/**
 * @alias debuggerMatterNotActive
 * @memberof Action
 * @desc Hides matter.js logic overlay
 */
const debuggerMatterNotActive = () => ({
  type: DEBUGGER_MATTER_NOT_ACTIVE
});

export { debuggerMatterNotActive };
