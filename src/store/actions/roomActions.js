export const GENERATE_LAYERS_ROOM_START = 'actions/GENERATE_LAYERS_ROOM_START';
export const GENERATE_LAYERS_ROOM_BOSS = 'actions/GENERATE_LAYERS_ROOM_BOSS';
export const GENERATE_LAYERS_ROOM_CHEST = 'actions/GENERATE_LAYERS_ROOM_CHEST';
export const GENERATE_LAYERS_ROOM_HOSTILE1 = 'actions/GENERATE_LAYERS_ROOM_HOSTILE1';
export const GENERATE_LAYERS_ROOM_HOSTILE2 = 'actions/GENERATE_LAYERS_ROOM_HOSTILE2';
export const GENERATE_LAYERS_ROOM = 'actions/GENERATE_LAYERS_ROOM';
export const CHANGE_ROOM = 'actions/CHANGE_ROOM';
export const GENERATE_ROOM = 'actions/GENERATE_ROOM';
export const DISABLE_BOSS_OVERLAY = 'actions/DISABLE_BOSS_OVERLAY';
export const DISABLE_START_OVERLAY = 'actions/DISABLE_START_OVERLAY';

/**
 * @alias disableBossOverlay
 * @memberof Action
 * @desc Set the state to display only once the fade out when the character enter in the boss room.
 */
const disableBossOverlay = () => ({
  type: DISABLE_BOSS_OVERLAY
});

export { disableBossOverlay };

/**
 * @alias disableStartOverlay
 * @memberof Action
 * @desc Set the state to display only once the fade out when the character enter in the start room.
 */
const disableStartOverlay = () => ({
  type: DISABLE_START_OVERLAY
});

export { disableStartOverlay };

/**
 * @alias generateLocalRoom
 * @memberof Action
 * @desc Generate local room from id 
 */
const generateLocalRoom = () => ({
  type: GENERATE_ROOM
});

export { generateLocalRoom };

/**
 * @alias generateLayersRoomStart
 * @memberof Action
 * @param {array} layersP
 * @desc Generate start room upper layer based on room id
 */
const generateLayersRoomStart = (layersP) => ({
  type: GENERATE_LAYERS_ROOM_START,
  room: {
    roomStart: {
      layersP
    }
  }
});

export { generateLayersRoomStart };

/**
 * @alias generateLayersRoomBoss
 * @memberof Action
 * @param {array} layersB
 * @desc Generate boss room upper layer based on room id
 */
const generateLayersRoomBoss = (layersB) => ({
  type: GENERATE_LAYERS_ROOM_BOSS,
  room: {
    roomBoss: {
      layersB
    }
  }
});

export { generateLayersRoomBoss };

/**
 * @alias generateLayersRoomChest
 * @memberof Action
 * @param {array} layersC
 * @desc Generate chest room upper layer based on room id
 */
const generateLayersRoomChest = (layersC) => ({
  type: GENERATE_LAYERS_ROOM_CHEST,
  room: {
    roomChest: {
      layersC
    }
  }
});

export { generateLayersRoomChest };

/**
 * @alias generateLayersRoomHostile1
 * @memberof Action
 * @param {array} layersH
 * @desc Generate hostile1 room upper layer based on room id
 */
const generateLayersRoomHostile1 = (layersH) => ({
  type: GENERATE_LAYERS_ROOM_HOSTILE1,
  room: {
    roomHostile1: {
      layersH
    }
  }
});

export { generateLayersRoomHostile1 };

/**
 * @alias generateLayersRoomHostile2
 * @memberof Action
 * @param {array} layersH
 * @desc Generate hostile2 room upper layer based on room id
 */
const generateLayersRoomHostile2 = (layersH) => ({
  type: GENERATE_LAYERS_ROOM_HOSTILE2,
  room: {
    roomHostile2: {
      layersH
    }
  }
});

export { generateLayersRoomHostile2 };

/**
 * @alias disableBossOverlay
 * @memberof Action
 * @param {object} enteredDoor
 * @desc Trigger room change (calling the next room generation) based off infos contained in enteredDoor Param
 */
const changeRoom = (enteredDoor) => ({
  type: CHANGE_ROOM,
  enteredDoor
});

export { changeRoom };
