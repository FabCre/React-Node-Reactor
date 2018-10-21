import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ball from 'src/containers/Ball';
import BallHole from 'src/components/BallHole';

import './roomhostile2.sass';

/**
 * @class RoomHostile2
 * @memberof Component
 * @hideconstructor
 * @classdesc Class RoomHostile2
 */
export default class RoomHostile2 extends Component {
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
   * @memberof Component.RoomHostile2
   * @desc Render the RoomHostile2.
   */
  render() {
     const { layers } = this.props.roomHostile2;

    return (
      <div>
        <div className='doors' style={{backgroundImage: `url(src/images/roomAssets/riddle/open/${layers}.png)`}}>
        </div>
        <div className='walls' style={{backgroundImage: 'url(src/images/roomAssets/riddle/walls.png)'}}> 
        </div>
        <div className='ground' style={{backgroundImage: 'url(src/images/roomAssets/dark-floor.png)'}}>
        </div>
        {this.props.reactor.ballVisible === 1 && <Ball />}
        <BallHole />
      </div>
    );
  };
};
