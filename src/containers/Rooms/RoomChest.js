import { connect } from 'react-redux';

import RoomChest from 'src/components/Room/RoomChest';

/**
 * @alias RoomChestContainer
 * @memberof Container
 * @desc RoomChest container.
 */
const mapStateToProps = state => ({
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
)(RoomChest);
