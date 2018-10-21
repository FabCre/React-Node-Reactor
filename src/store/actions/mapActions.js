export const CREATE_MAP = 'actions/CREATE_MAP';
export const PLACE_ROOM_START = 'actions/PLACE_ROOM_START';
export const GENERATE_ROOMS = 'actions/GENERATE_ROOMS';
export const GENERATE_MAX_ROOMS = 'actions/GENERATE_MAX_ROOMS';
export const SET_STAGE = 'actions/SET_STAGE';
export const GET_LOGGER = 'actions/GET_LOGGER';
export const INIT_LOGGER = 'actions/INIT_LOGGER';

/**
 * @alias createMap
 * @memberof Action
 * @desc Create global map used to place rooms on a 11x11 grid
 */
const createMap = () => ({
  type: CREATE_MAP
});

export { createMap };

/**
 * @alias initLogger
 * @memberof Action
 * @desc Trigger the local clock launch
 */
const initLogger = () => ({
  type: INIT_LOGGER
});

export { initLogger };

/**
 * @alias getLogger
 * @memberof Action
 * @desc Fetch local clock current time
 */
const getLogger = () => ({
  type: GET_LOGGER
});

export { getLogger };

/**
 * @alias setStage
 * @memberof Action
 * @param {number} stageX
 * @param {number} stageY
 * @desc Set a camera zone in case of non staqndard room layout (wip to be implemented)
 */
const setStage = (stageX, stageY) => ({
  type: SET_STAGE,
  stageX,
  stageY
});

export { setStage };

/**
 * @alias placeOriginRoom
 * @memberof Action
 * @param {matrix} globalmap
 * @desc Place first room at globalMap grid center (position x=5, y=5)
 */
const placeOriginRoom = (globalmap) => ({
  type: PLACE_ROOM_START,
  globalmap
});

export { placeOriginRoom };

/**
 * @alias generateRooms
 * @memberof Action
 * @param {matrix} globalmap
 * @param {number} roomX
 * @param {number} roomY
 * @desc Procedurally generate a new room at valid coordinates, stems from previous room position
 */
const generateRooms = (globalmap, roomX, roomY) => ({
  type: GENERATE_ROOMS,
  globalmap,
  room: {
    roomX,
    roomY
  }
});

export { generateRooms };

/**
 * @alias generateMaxRooms
 * @memberof Action
 * @param {matrix} globalmap
 * @param {number} roomX
 * @param {number} roomY
 * @param {number} maxRoom
 * @param {number} count
 * @desc Generate new rooms until the maxroom limit is met
 */
const generateMaxRooms = (globalmap, roomX, roomY, maxRoom, count) => ({
  type: GENERATE_MAX_ROOMS,
  globalmap,
  room: {
    roomX,
    roomY
  },
  maxRoom,
  count
});

export { generateMaxRooms };