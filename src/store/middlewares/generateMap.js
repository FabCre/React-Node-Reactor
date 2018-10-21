import {
  CREATE_MAP,
  PLACE_ROOM_START,
  GENERATE_ROOMS,
  GENERATE_MAX_ROOMS
} from 'src/store/actions/mapActions';

import shuffle from 'shuffle-array';

/**
 * @alias generateMapMiddleware
 * @memberof Middleware
 * @param {object} store
 * @param {object} next
 * @param {object} action
 * @desc Dispatch correct map creation action based on call passed as parameter
 */
const generateMap = store => next => (action) => {
  switch (action.type) {
    case CREATE_MAP: {
      // We fetch the globalmap props from the store
      const {
        MAP_WIDTH,
        MAP_HEIGHT,
        MAX_ROOMS,
        room
      } = store.getState().mapRooms.globalmapProps;
      // we fetch an empty globalmap from the store
      let { globalmap } = store.getState().mapRooms.globalmapProps;

      // Creating the surface of the globalmap
      for (var width = 0; width < MAP_WIDTH; width++) {
        globalmap[width] = [];
        for (var height = 0; height < MAP_HEIGHT; height++) {
          globalmap[width][height] = 0;
        }
      };
      // Here we place our original room in the globalmap
      globalmap = store.dispatch({type: PLACE_ROOM_START, globalmap});
      // Here we insert new rooms in the globalmap according to the origin room postion
      globalmap = store.dispatch({type: GENERATE_MAX_ROOMS, globalmap, roomX: room.roomX, roomY: room.roomY, MAX_ROOMS});

      return globalmap;
    }

    case PLACE_ROOM_START: {
      let { globalmap } = store.getState().mapRooms.globalmapProps;
      const originRoom = 1;
      globalmap[5][5] = originRoom;
      return globalmap;
    }

    case GENERATE_ROOMS: {
      let localCount = action.count;
      let { globalmap, room } = store.getState().mapRooms.globalmapProps;

      // Randomize direction in the new room placement
      const random = shuffle([-1, 1]);

      // Give à value to the new room
      const newRoom = localCount + 1;

      // Randomize the y ou x placement of the new room
      const randomAxis = shuffle([0, random[0]]);
      let nextRoomX = room.roomX[ localCount - 1 ] + randomAxis[0];
      let nextRoomY = room.roomY[ localCount - 1 ] + randomAxis[1];

      // Here we create a new & store it's cooridnates
      if (globalmap[nextRoomX][nextRoomY] === 0) {
        globalmap[nextRoomX][nextRoomY] = newRoom;
        room.roomX.push(nextRoomX);
        room.roomY.push(nextRoomY);
      } else {
        store.dispatch({type: GENERATE_ROOMS, globalmap, roomX: room.roomX, roomY: room.roomY, count: localCount});
      };
      return globalmap;
    }

    case GENERATE_MAX_ROOMS: {
      let {globalmap, room, MAX_ROOMS} = store.getState().mapRooms.globalmapProps;

      for (let count = 1; count < MAX_ROOMS; count++) {
        action.count++;
        store.dispatch({type: GENERATE_ROOMS, globalmap, roomX: room.roomX, roomY: room.roomY, count});
      }
      return globalmap;
    }
  };

  next(action);
};

export default generateMap;
