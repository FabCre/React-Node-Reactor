import { connect } from 'react-redux';

import GlobalMap from 'src/components/GlobalMap';

import { CREATE_MAP } from 'src/store/actions/mapActions';

import {
  GENERATE_LAYERS_ROOM_START,
  GENERATE_LAYERS_ROOM_BOSS,
  GENERATE_LAYERS_ROOM_CHEST,
  GENERATE_LAYERS_ROOM_HOSTILE1,
  GENERATE_LAYERS_ROOM_HOSTILE2
} from 'src/store/actions/roomActions';

/**
 * @alias GlobalMapContainer
 * @memberof Container
 * @desc GlobalMap container.
 */
const mapStateToProps = state => ({
  // MAP props
  globalmapProps: state.mapRooms.globalmapProps,
  currentRoomId: state.mapRooms.currentRoom.id,
  // ROOMS props
  roomStart: state.mapRooms.globalmapProps.room.roomStart,
  roomBoss: state.mapRooms.globalmapProps.room.roomBoss,
  roomChest: state.mapRooms.globalmapProps.room.roomChest,
  roomHostile1: state.mapRooms.globalmapProps.room.roomHostile1,
  roomHostile2: state.mapRooms.globalmapProps.room.roomHostile2
});

const mapDispatchToProps = dispatch => ({
  // Callback when component GlobalMap is construct for create globalmap called once
  createMap: () => {
    dispatch({
      type: CREATE_MAP
    });
  },
  // Callback when component GlobalMap is construct for create roomStart called once
  generateRoomStart: () => {
    dispatch({
      type: GENERATE_LAYERS_ROOM_START
    });
  },
  // Callback when component GlobalMap is construct for create roomBoss called once
  generateRoomBoss: () => {
    dispatch({
      type: GENERATE_LAYERS_ROOM_BOSS
    });
  },
  // Callback when component GlobalMap is construct for create roomChest called once
  generateRoomChest: () => {
    dispatch({
      type: GENERATE_LAYERS_ROOM_CHEST
    });
  },
  // Callback when component GlobalMap is construct for create roomHostile1 called once
  generateRoomHostile1: () => {
    dispatch({
      type: GENERATE_LAYERS_ROOM_HOSTILE1
    });
  },
  //  Callback when component GlobalMap is construct for create roomHostile2 called once
  generateRoomHostile2: () => {
    dispatch({
      type: GENERATE_LAYERS_ROOM_HOSTILE2
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMap);
