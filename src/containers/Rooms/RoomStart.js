import { connect } from 'react-redux';

import RoomStart from 'src/components/Room/RoomStart';
import { GENERATE_ROOM, DISABLE_START_OVERLAY } from 'src/store/actions/roomActions';

/**
 * @alias RoomStartContainer
 * @memberof Container
 * @desc RoomStart container.
 */
const mapStateToProps = state => ({
  // MAP props
  globalmapProps: state.mapRooms.globalmapProps,
  // ROOMS props
  roomStart: state.mapRooms.globalmapProps.room.roomStart,
  roomBoss: state.mapRooms.globalmapProps.room.roomBoss,
  roomChest: state.mapRooms.globalmapProps.room.roomChest,
  currentRoom: state.mapRooms.currentRoom,
  startOverlay: state.mapRooms.startOverlay,
  // REACTOR props
  reactor: state.mapRooms.reactor
});

const mapDispatchToProps = dispatch => ({
  // Callback when Main character enter collision with doors for change currentRoom
  generateLocalRoom: (currentRoom) => {
    dispatch({
      type: GENERATE_ROOM,
      currentRoom
    });
  },
  disableStartOverlay: () => {
    dispatch({
      type: DISABLE_START_OVERLAY
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomStart);
