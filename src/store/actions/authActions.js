/**
 * @namespace Action
 * @desc All Redux Actions
 */

export const SET_CURRENT_USER = 'actions/SET_CURRENT_USER';

/**
 * @alias authAction
 * @memberof Action
 * @param {object} payload
 * @desc Authentification Action.
 */
const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload
});

export { setCurrentUser };