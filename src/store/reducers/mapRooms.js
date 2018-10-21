import {
  CREATE_MAP,
  PLACE_ROOM_START,
  GENERATE_MAX_ROOMS
} from 'src/store/actions/mapActions';

import { 
  CHANGE_ROOM,
  GENERATE_LAYERS_ROOM_START,
  GENERATE_LAYERS_ROOM_BOSS,
  GENERATE_LAYERS_ROOM_CHEST,
  GENERATE_LAYERS_ROOM_HOSTILE1,
  GENERATE_LAYERS_ROOM_HOSTILE2,
  DISABLE_START_OVERLAY,
  DISABLE_BOSS_OVERLAY
} from 'src/store/actions/roomActions';

import {
  SET_STAGE,
  GET_LOGGER,
  INIT_LOGGER
} from 'src/store/actions/mapActions';

/**
 * @alias mapRoom_initialState
 * @memberof Reducer
 * @desc Initial state used to set up the app at launch
 */
const initialState = {
  // ----------------------- MAP STATE -----------------------
  globalmapProps: {
    globalmap: [],
    MAP_HEIGHT: 11,
    MAP_WIDTH: 11,
    MAX_ROOMS: 5,
    room: {
      roomX: [5],
      roomY: [5],
      roomStart: {
        id: 1,
        layers: 0
      },
      roomBoss: {
        id: 5,
        layers: 0
      },
      roomChest: {
        id: 3,
        layers: 0
      },
      roomHostile1: {
        id: 2,
        layers: 0
      },
      roomHostile2: {
        id: 4,
        layers: 0
      }
    },
    count: 0
  },

  //  ----------------------- ROOM STATE -----------------------
  currentRoom: {
    id: 1,
    roomX: 5,
    roomY: 5,
    layers: 0
  },
  enteredDoor: null,
  roomLocked: false,
  logger: '',
  initDateString: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  startOverlay: true,
  bossOverlay: true
};

/**
 * @alias mapRoomsReducer
 * @memberof Reducer
 * @param {object} state
 * @param {object} action
 * @desc Set the new state which depend on the action.
 */
const mapRooms = (state = initialState, action = {}) => {
  switch (action.type) {
    // ----------------------- MAP ACTIONS -----------------------
    /**
     * Change state globalmapProps when component globalmap  this building
    */
   case INIT_LOGGER: {
     return {
       ...state,
       initDateString: action.initDateString,
     }
   }
    case GET_LOGGER:
    {
      return {
        ...state,
        logger: action.dateString,
      }
    }
    case CREATE_MAP:
    case PLACE_ROOM_START:
    case GENERATE_MAX_ROOMS:
    {
      const globalmapProps = {
        ...state.globalmapProps,
        globalmap: action.globalmap,
        room: {
          roomX: [...state.globalmapProps.room.roomX, action.roomX],
          roomY: [...state.globalmapProps.room.roomY, action.roomY]
        },
        count: action.count
      };
      return { ...state, globalmapProps };
    }

    case SET_STAGE:
    {
      const globalmapProps = {
        ...state.globalmapProps,
        stageX: action.stageX,
        stageY: action.stageY
      };
      return {...state, globalmapProps};
    }
    // ----------------------- ROOM ACTIONS -----------------------
    /**
     * Change state currentRoom when Main character change room
    */
    case CHANGE_ROOM: {
      return {
        ...state,
        currentRoom: action.currentRoom
      };
    }
    /**
     * Change state roomStart when component globalmap this building
     * is called once
    */
    case GENERATE_LAYERS_ROOM_START:
    {
      const globalmapProps = {
        ...state.globalmapProps,
        room: {
          ...state.globalmapProps.room,
          roomStart: {
            layers: action.newcallLayer
          }
        }
      };
      return { ...state, globalmapProps };
    }
    /**
     * Change state roomBoss when component globalmap this building
     * is called once
    */
    case GENERATE_LAYERS_ROOM_BOSS:
    {
      const globalmapProps = {
        ...state.globalmapProps,
        room: {
          ...state.globalmapProps.room,
          roomBoss: {
            layers: action.newcallLayer
            // layers: action.layersB
          }
        }
      };
      return { ...state, globalmapProps };
    }
    /**
     * Change state roomChest when component globalmap this building
     * is called once
    */
    case GENERATE_LAYERS_ROOM_CHEST:
    {
      const globalmapProps = {
        ...state.globalmapProps,
        room: {
          ...state.globalmapProps.room,
          roomChest: {
            layers: action.newcallLayer
            // layers: action.layersC
          }
        }
      };
      return { ...state, globalmapProps };
    }
    /**
     * Change state roomHostile1 when component globalmap this building
     * is called once
    */
    case GENERATE_LAYERS_ROOM_HOSTILE1: {
      const globalmapProps = {
        ...state.globalmapProps,
        room: {
          ...state.globalmapProps.room,
          roomHostile1: {
            layers: action.newcallLayer
            // layers: action.layersH
          }
        }
      };
      return { ...state,
        globalmapProps
      };
    }
    /**
     * Change state roomHostile2 when component globalmap this building
     * is called once
    */
    case GENERATE_LAYERS_ROOM_HOSTILE2: {
      const globalmapProps = {
        ...state.globalmapProps,
        room: {
          ...state.globalmapProps.room,
          roomHostile2: {
            layers: action.newcallLayer
            // layers: action.layersH
          }
        }
      };
      return { ...state,
        globalmapProps
      };
    }
    case DISABLE_START_OVERLAY:
    {
      return {
        ...state,
        startOverlay: false
      }
    }
    case DISABLE_BOSS_OVERLAY:
    {
      return {
        ...state,
        bossOverlay: false
      }
    }

    default:
      return state;
  }
};

export default mapRooms;
