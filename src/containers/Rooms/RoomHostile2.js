import { connect } from 'react-redux';

import RoomHostile2 from 'src/components/Room/RoomHostile2';

/**
 * @alias RoomHostile2Container
 * @memberof Container
 * @desc RoomHostile2 container.
 */
const mapStateToProps = state => ({
  reactor: state.reactor,
  globalmapProps: state.mapRooms.globalmapProps,
  currentRoom: state.mapRooms.currentRoom,
  currentRoomId: state.mapRooms.currentRoom.id,
  roomStart: state.mapRooms.globalmapProps.room.roomStart,
  roomBoss: state.mapRooms.globalmapProps.room.roomBoss,
  roomChest: state.mapRooms.globalmapProps.room.roomChest,
  roomHostile1: state.mapRooms.globalmapProps.room.roomHostile1,
  roomHostile2: state.mapRooms.globalmapProps.room.roomHostile2
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomHostile2);
