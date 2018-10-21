import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Chest1 from 'src/containers/Chest1';

import './roomchest.sass';

/**
 * @class RoomChest
 * @memberof Component
 * @hideconstructor
 * @classdesc Class RoomChest
 */
export default class RoomChest extends Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      stageX: 0,
      layers: this.props.currentRoom.layers
    };
  }

  /**
   * @method render
   * @memberof Component.RoomChest
   * @desc Render the RoomChest.
   */
  render() {
     const { layers } = this.props.roomChest;

    return (
      <div>
        <div className='doors' style={{backgroundImage: `url(src/images/roomAssets/chest/open/${layers}.png)`}}>
        </div>
        <div className='walls' style={{backgroundImage: 'url(src/images/roomAssets/chest/walls.png)'}}> 
        </div>
        <div className='ground' style={{backgroundImage: 'url(src/images/roomAssets/chest-floor.png)'}}>
        <Chest1 />
        </div>
      </div>
    );
  };
};
