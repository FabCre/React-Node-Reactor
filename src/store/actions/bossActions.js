export const SET_BOSS_POSITION = 'actions/SET_BOSS_POSITION';
export const NEW_BOSS_ACTION = 'actions/NEW_BOSS_ACTION';
export const ATTACK_BOSS = 'actions/ATTACK_BOSS';
export const BOSS_ACTION = 'actions/BOSS_ACTION';
export const DISPLAY_FRONT_ATTACK = 'actions/DISPLAY_FRONT_ATTACK';
export const HIDE_FRONT_ATTACK = 'actions/HIDE_FRONT_ATTACK';
export const DISPLAY_SIDE_ATTACK = 'actions/DISPLAY_SIDE_ATTACK';
export const HIDE_SIDE_ATTACK = 'actions/HIDE_SIDE_ATTACK';
export const ANGLE_SIDE_ATTACK = 'actions/ANGLE_SIDE_ATTACK';
export const DEATH_BOSS_ANIMATION = 'actions/DEATH_BOSS_ANIMATION';

/**
 * @alias setBossPosition
 * @param {number} bossx
 * @param {number} bossy
 * @memberof Action
 * @desc Boss position definition
 */
const setBossPosition = (bossx, bossy) => ({
  type: SET_BOSS_POSITION,
  bossx,
  bossy
});

export { setBossPosition };

/**
 * @alias newBossAction
 * @param {string} bossAction
 * @memberof Action
 * @desc New boss action call
 */
const newBossAction = (bossAction) => ({
  type: NEW_BOSS_ACTION,
  bossAction
});

export { newBossAction };

/**
 * @alias bossAction
 * @param {string} bossAction
 * @memberof Action
 * @desc Current boss action evaluation
 */
const bossAction = (bossAction) => ({
  type: BOSS_ACTION,
  bossAction
});

export { bossAction };

/**
 * @alias receiveDamage
 * @param {string} bossDamage
 * @memberof Action
 * @desc Damage effect on bossLife trigger
 */
const receiveDamage = (bossDamage) => ({
  type: ATTACK_BOSS,
  bossDamage
});

export { receiveDamage };

/**
 * @alias displayFrontAttack
 * @memberof Action
 * @desc Displays/update front attack visual
 */
const displayFrontAttack = () => ({
  type: DISPLAY_FRONT_ATTACK
});

export { displayFrontAttack };

/**
 * @alias hideFrontAttack
 * @memberof Action
 * @desc Hides front attack visual
 */
const hideFrontAttack = () => ({
  type: HIDE_FRONT_ATTACK
});

export { hideFrontAttack };

/**
 * @alias displaySideAttack
 * @memberof Action
 * @desc Displays/update side attack visuals
 */
const displaySideAttack = () => ({
  type: DISPLAY_SIDE_ATTACK
});

export { displaySideAttack };

/**
 * @alias hideSideAttack
 * @memberof Action
 * @desc Hides side attack visuals
 */
const hideSideAttack = () => ({
  type: HIDE_SIDE_ATTACK
});

export { hideSideAttack };

/**
 * @alias angleSideAttack
 * @param {number} angle
 * @memberof Action
 * @desc Side attack angle definition
 for
 */
const angleSideAttack = (angle) => ({
  type: ANGLE_SIDE_ATTACK,
  angle
});

export { angleSideAttack };

/**
 * @alias deathBossAnimation
 * @memberof Action
 * @desc Display boss death animation
 */
const deathBossAnimation = () => ({
  type: DEATH_BOSS_ANIMATION
});

export { deathBossAnimation };