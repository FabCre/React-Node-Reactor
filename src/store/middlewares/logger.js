import store from 'src/store';

import {
  GET_LOGGER,
  INIT_LOGGER
} from 'src/store/actions/mapActions';

/**
 * @alias loggerMiddleware
 * @memberof Middleware
 * @param {object} store
 * @param {object} next
 * @param {object} action
 * @desc Dispatch logger action based on call passed as parameter
 */
const logger = store => next => (action) => {
  let { initDateString } = store.getState().mapRooms;

  const timer = new Date();
  let hours = timer.getHours();
  let minutes = timer.getMinutes();
  let seconds = timer.getSeconds();

  let dateString =
    ('0' + hours).slice(-2) + ':' +
    ('0' + minutes).slice(-2) + ':' +
    ('0' + seconds).slice(-2);

  action.dateString = dateString;
  action.initDateString = {
    hours,
    minutes,
    seconds
  };

  switch (action) {
    case INIT_LOGGER: {
      return action.initDateString;
    }
    case GET_LOGGER:
    {
      return action.dateSting;
    }
    default:
    {}
  }
  next(action);
};

export default logger;
