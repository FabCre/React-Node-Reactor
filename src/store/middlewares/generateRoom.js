import {
  GENERATE_LAYERS_ROOM_START,
  GENERATE_LAYERS_ROOM_BOSS,
  GENERATE_LAYERS_ROOM_CHEST,
  GENERATE_LAYERS_ROOM_HOSTILE1,
  GENERATE_LAYERS_ROOM_HOSTILE2,
  CHANGE_ROOM,
  GENERATE_ROOM
} from 'src/store/actions/roomActions';

/**
 * @alias generateRoomMiddleware
 * @memberof Middleware
 * @param {object} store
 * @param {object} next
 * @param {object} action
 * @desc Dispatch correct room creation action based on call passed as parameter
 */
const generateRoom = store => next => (action) => {
  switch (action.type) {
    // ----------------------- ROOM CHANGE -----------------------
    case CHANGE_ROOM: {
      let enteredDoor = action.enteredDoor;
      let { currentRoom } = store.getState().mapRooms;
      const { globalmapProps } = store.getState().mapRooms;
      const { room } = globalmapProps;

      // fetching door state from the state at the current room coordinates
      const doorNorth = globalmapProps.globalmap[currentRoom.roomX][currentRoom.roomY].mapRoom.doorNorth;
      const doorSouth = globalmapProps.globalmap[currentRoom.roomX][currentRoom.roomY].mapRoom.doorSouth;
      const doorEast = globalmapProps.globalmap[currentRoom.roomX][currentRoom.roomY].mapRoom.doorEast;
      const doorWest = globalmapProps.globalmap[currentRoom.roomX][currentRoom.roomY].mapRoom.doorWest;

      if (enteredDoor === doorNorth.id) {
        enteredDoor = doorNorth;
      } else if (enteredDoor === doorSouth.id) {
        enteredDoor = doorSouth;
      } else if (enteredDoor === doorEast.id) {
        enteredDoor = doorEast;
      } else if (enteredDoor === doorWest.id) {
        enteredDoor = doorWest;
      }

      // return the current door object providing support for nextRoom reference
      if (enteredDoor !== null) {
        currentRoom.id = enteredDoor.nextRoom;
        currentRoom.roomX = room.roomX[currentRoom.id - 1];
        currentRoom.roomY = room.roomY[currentRoom.id - 1];
        store.dispatch({
          type: GENERATE_ROOM,
          currentRoom
        });
      }
      return currentRoom;
    }
    // ----------------------- GENERATE THE START ROOM -----------------------
    case GENERATE_LAYERS_ROOM_START: {
      const { globalmap, room } = store.getState().mapRooms.globalmapProps;
      const { currentRoom } = store.getState().mapRooms;
      const { roomStart } = room;
      const mapRoom = {};

      // setting room coord with fetched values
      mapRoom.coord = {
        x: currentRoom.roomX,
        y: currentRoom.roomY
      };

      // setting room.id on map for referencing from room coord
      mapRoom.id = globalmap[mapRoom.coord.x][mapRoom.coord.y];

      // setting room doors props on map for referencing from room coord
      mapRoom.North = globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x - 1][mapRoom.coord.y];
      mapRoom.South = globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x + 1][mapRoom.coord.y];
      mapRoom.West = globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y - 1];
      mapRoom.East = globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y + 1];

      // Doors generation based on fetched values
      mapRoom.doorNorth =
      {
        id: 1,
        nextRoom: mapRoom.North,
        isActive: mapRoom.North !== 0
      };

      mapRoom.doorEast =
      {
        id: 2,
        nextRoom: mapRoom.East,
        isActive: mapRoom.East !== 0
      };

      mapRoom.doorSouth =
      {
        id: 3,
        nextRoom: mapRoom.South,
        isActive: mapRoom.South !== 0
      };

      mapRoom.doorWest =
      {
        id: 4,
        nextRoom: mapRoom.West,
        isActive: mapRoom.West !== 0
      };

      const callLayer = [];

      if (mapRoom.doorNorth.isActive) {
        callLayer.push(1);
      }
      if (mapRoom.doorEast.isActive) {
        callLayer.push(2);
      }
      if (mapRoom.doorSouth.isActive) {
        callLayer.push(3);
      }
      if (mapRoom.doorWest.isActive) {
        callLayer.push(4);
      }

      const newcallLayer = callLayer.join('');

      mapRoom.layers = newcallLayer;
      roomStart.layers = newcallLayer;

      // room object population at room coord
      globalmap[mapRoom.coord.x][mapRoom.coord.y] = {
        mapRoom
      };

      return newcallLayer;
    }

    // ----------------------- GENERATE THE BOSS ROOM -----------------------
    case GENERATE_LAYERS_ROOM_BOSS: {
      const { globalmap, room } = store.getState().mapRooms.globalmapProps;
      const { roomBoss } = room;
      const mapRoom = {};

      // setting room coord with fetched values
      mapRoom.coord = {
        x: room.roomX[4],
        y: room.roomY[4]
      };
      // setting room.id on map for referencing from room coord
      // mapRoom.id = 4;
      mapRoom.id = globalmap[mapRoom.coord.x][mapRoom.coord.y];

      // setting room doors props on map for referencing from room coord
      mapRoom.North = globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x - 1][mapRoom.coord.y];
      mapRoom.South = globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x + 1][mapRoom.coord.y];
      mapRoom.West = globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y - 1];
      mapRoom.East = globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y + 1];

      // Doors generation based on fetched values
      mapRoom.doorNorth = {
        id: 1,
        nextRoom: mapRoom.North,
        isActive: mapRoom.North !== 0
      };

      mapRoom.doorEast = {
        id: 2,
        nextRoom: mapRoom.East,
        isActive: mapRoom.East !== 0
      };

      mapRoom.doorSouth = {
        id: 3,
        nextRoom: mapRoom.South,
        isActive: mapRoom.South !== 0
      };

      mapRoom.doorWest = {
        id: 4,
        nextRoom: mapRoom.West,
        isActive: mapRoom.West !== 0
      };

      const callLayer = [];

      if (mapRoom.doorNorth.isActive) {
        callLayer.push(1);
      }
      if (mapRoom.doorEast.isActive) {
        callLayer.push(2);
      }
      if (mapRoom.doorSouth.isActive) {
        callLayer.push(3);
      }
      if (mapRoom.doorWest.isActive) {
        callLayer.push(4);
      }

      const newcallLayer = callLayer.join('');

      mapRoom.layers = newcallLayer;
      roomBoss.layers = newcallLayer;

      // room object population at room coord
      globalmap[mapRoom.coord.x][mapRoom.coord.y] = {
        mapRoom
      };

      return newcallLayer;
    }

    // ----------------------- GENERATE THE CHEST ROOM -----------------------
    case GENERATE_LAYERS_ROOM_CHEST: {
      const { globalmap, room } = store.getState().mapRooms.globalmapProps;
      const { roomChest } = room;
      const mapRoom = {};

      // Retrives the room coord from array of all coords
      mapRoom.coord = {
        x: room.roomX[2],
        y: room.roomY[2]
      };

      // setting room.id on map for referencing from room coord
      // mapRoom.id = 3;
      mapRoom.id = globalmap[mapRoom.coord.x][mapRoom.coord.y];

      // setting room doors props on map for referencing from room coord
      mapRoom.North = globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x - 1][mapRoom.coord.y];
      mapRoom.South = globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x + 1][mapRoom.coord.y];
      mapRoom.West = globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y - 1];
      mapRoom.East = globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y + 1];
      // Doors generation based on fetched values
      mapRoom.doorNorth = {
        id: 1,
        nextRoom: mapRoom.North,
        isActive: mapRoom.North !== 0
      };

      mapRoom.doorEast = {
        id: 2,
        nextRoom: mapRoom.East,
        isActive: mapRoom.East !== 0
      };

      mapRoom.doorSouth = {
        id: 3,
        nextRoom: mapRoom.South,
        isActive: mapRoom.South !== 0
      };

      mapRoom.doorWest = {
        id: 4,
        nextRoom: mapRoom.West,
        isActive: mapRoom.West !== 0
      };

      const callLayer = [];

      if (mapRoom.doorNorth.isActive) {
        callLayer.push(1);
      }
      if (mapRoom.doorEast.isActive) {
        callLayer.push(2);
      }
      if (mapRoom.doorSouth.isActive) {
        callLayer.push(3);
      }
      if (mapRoom.doorWest.isActive) {
        callLayer.push(4);
      }

      const newcallLayer = callLayer.join('');

      mapRoom.layers = newcallLayer;
      roomChest.layers = newcallLayer;

      // room object population at room coord
      globalmap[mapRoom.coord.x][mapRoom.coord.y] = {
        mapRoom
      };

      return newcallLayer;
    }

    // ----------------------- GENERATE THE HOSTILE ROOM 1 -----------------------
    case GENERATE_LAYERS_ROOM_HOSTILE1: {
      const { globalmap, room } = store.getState().mapRooms.globalmapProps;
      const { roomHostile1 } = room;
      const mapRoom = {};

      // Retrives the room coord from array of all coords
      mapRoom.coord = {
        x: room.roomX[1],
        y: room.roomY[1]
      };

      // setting room.id on map for referencing from room coord
      // mapRoom.id = 2;
      mapRoom.id = globalmap[mapRoom.coord.x][mapRoom.coord.y];

      // setting room doors props on map for referencing from room coord
      mapRoom.North = globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x - 1][mapRoom.coord.y];
      mapRoom.South = globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x + 1][mapRoom.coord.y];
      mapRoom.West = globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y - 1];
      mapRoom.East = globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y + 1];

      // Doors generation based on fetched values
      mapRoom.doorNorth = {
        id: 1,
        nextRoom: mapRoom.North,
        isActive: mapRoom.North !== 0
      };

      mapRoom.doorEast = {
        id: 2,
        nextRoom: mapRoom.East,
        isActive: mapRoom.East !== 0
      };

      mapRoom.doorSouth = {
        id: 3,
        nextRoom: mapRoom.South,
        isActive: mapRoom.South !== 0
      };

      mapRoom.doorWest = {
        id: 4,
        nextRoom: mapRoom.West,
        isActive: mapRoom.West !== 0
      };

      const callLayer = [];

      if (mapRoom.doorNorth.isActive) {
        callLayer.push(1);
      }
      if (mapRoom.doorEast.isActive) {
        callLayer.push(2);
      }
      if (mapRoom.doorSouth.isActive) {
        callLayer.push(3);
      }
      if (mapRoom.doorWest.isActive) {
        callLayer.push(4);
      }

      const newcallLayer = callLayer.join('');

      mapRoom.layers = newcallLayer;
      roomHostile1.layers = newcallLayer;

      // room object population at room coord
      globalmap[mapRoom.coord.x][mapRoom.coord.y] = {
        mapRoom
      };

      return newcallLayer;
    }
    // ----------------------- GENERATE THE HOSTILE ROOM 2 -----------------------
    case GENERATE_LAYERS_ROOM_HOSTILE2: {
      const { globalmap, room } = store.getState().mapRooms.globalmapProps;
      const { roomHostile2 } = room;
      const mapRoom = {};

      // Retrives the room coord from array of all coords
      mapRoom.coord = {
        x: room.roomX[3],
        y: room.roomY[3]
      };

      // setting room.id on map for referencing from room coord
      // mapRoom.id = 4;
      mapRoom.id = globalmap[mapRoom.coord.x][mapRoom.coord.y];

      // setting room doors props on map for referencing from room coord
      mapRoom.North = globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x - 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x - 1][mapRoom.coord.y];
      mapRoom.South = globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom ? globalmap[mapRoom.coord.x + 1][mapRoom.coord.y].mapRoom.id : globalmap[mapRoom.coord.x + 1][mapRoom.coord.y];
      mapRoom.West = globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y - 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y - 1];
      mapRoom.East = globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom ? globalmap[mapRoom.coord.x][mapRoom.coord.y + 1].mapRoom.id : globalmap[mapRoom.coord.x][mapRoom.coord.y + 1];

      // Doors generation based on fetched values
      mapRoom.doorNorth = {
        id: 1,
        nextRoom: mapRoom.North,
        isActive: mapRoom.North !== 0
      };

      mapRoom.doorEast = {
        id: 2,
        nextRoom: mapRoom.East,
        isActive: mapRoom.East !== 0
      };

      mapRoom.doorSouth = {
        id: 3,
        nextRoom: mapRoom.South,
        isActive: mapRoom.South !== 0
      };

      mapRoom.doorWest = {
        id: 4,
        nextRoom: mapRoom.West,
        isActive: mapRoom.West !== 0
      };

      const callLayer = [];

      if (mapRoom.doorNorth.isActive) {
        callLayer.push(1);
      }
      if (mapRoom.doorEast.isActive) {
        callLayer.push(2);
      }
      if (mapRoom.doorSouth.isActive) {
        callLayer.push(3);
      }
      if (mapRoom.doorWest.isActive) {
        callLayer.push(4);
      }

      const newcallLayer = callLayer.join('');

      mapRoom.layers = newcallLayer;
      roomHostile2.layers = newcallLayer;

      // room object population at room coord
      globalmap[mapRoom.coord.x][mapRoom.coord.y] = {
        mapRoom
      };

      return newcallLayer;
    }
  };

  next(action);
};

export default generateRoom;
