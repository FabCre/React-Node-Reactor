import React from 'react';
import PropTypes from 'prop-types';

import RoomStart from 'src/containers/Rooms/RoomStart';
import RoomHostile1 from 'src/containers/Rooms/RoomHostile1';
import RoomChest from 'src/containers/Rooms/RoomChest';
import RoomHostile2 from 'src/containers/Rooms/RoomHostile2';
import RoomBoss from 'src/containers/Rooms/RoomBoss';

/**
 * @class GlobalMap
 * @memberof Component
 * @hideconstructor
 * @classdesc Class GlobalMap
 */
export default class GlobalMap extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  }

  constructor(props) {
    super(props);
    // Called once
    if (this.props.globalmapProps.globalmap.length === 0) {
      // Create globalmap
      this.props.createMap();
      // console.log(this.props.globalmapProps.globalmap, 'CONSTRUCTOR GLOBAL MAP');
      // Create Rooms
      this.props.generateRoomStart();
      this.props.generateRoomHostile1();
      this.props.generateRoomChest();
      this.props.generateRoomHostile2();
      this.props.generateRoomBoss();
    }
  }

  /**
   * @method render
   * @memberof Component.GlobalMap
   * @desc Render the GlobalMap component and display the room.
   */
  render() {
    const { currentRoomId } = this.props;

    return (
      <div className='rooms' style={{ position: 'absolute', height: '832px', width: '1088px' }}>
        {/* Change component depending on the current room */}
        { currentRoomId === 1 && <RoomStart/> }
        { currentRoomId === 2 && <RoomHostile1 /> }
        { currentRoomId === 3 && <RoomChest /> }
        { currentRoomId === 4 && <RoomHostile2 /> }
        { currentRoomId === 5 && <RoomBoss /> }
      </div>
    );
  };
};
