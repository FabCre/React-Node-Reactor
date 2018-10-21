import store from 'src/store';

import {
  CLOSE_MODAL
} from 'src/store/actions/modalActions';

/**
 * @alias closeModalMiddleware
 * @memberof Middleware
 * @param {number} quizzState
 * @desc Dispatch a new quizzState to close the modal.
 */
const closeModal = (quizzState) => {
  store.dispatch({type: CLOSE_MODAL, quizzState});
};

export { closeModal };