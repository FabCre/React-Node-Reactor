import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './roomstart.sass';

/**
 * @class RoomStart
 * @memberof Component
 * @hideconstructor
 * @classdesc Class RoomStart
 */
export default class RoomStart extends Component {
   static contextTypes = {
     scale: PropTypes.number,
     engine: PropTypes.object
   };

   constructor(props) {
     super(props);
     this.state = {
       stageX: 0,
     };
   }

  /**
   * @method componentDidMount
   * @memberof Component.RoomStart
   * @desc Code to execute after component render, here triggers a fadin effect.
   */
  componentDidMount() {
    const startOverlay = () => setTimeout(() => {this.props.disableStartOverlay()}, 5000);

    startOverlay();
  }

   /**
    * @method render
    * @memberof Component.RoomStart
    * @desc Render the RoomStart.
    */
   render() {
     const { layers } = this.props.roomStart;
     return (
      <div>
        {this.props.startOverlay === true && <div className='startOverlay'></div>}
        <div className='doors' style={{backgroundImage: `url(src/images/roomAssets/base/open/${layers}.png)`}}>
        </div>
        <div className='walls' style={{backgroundImage: 'url(src/images/roomAssets/base/walls.png)'}}> 
        </div>
        <div className='ground' style={{backgroundImage: 'url(src/images/roomAssets/start-floor.png)'}}>
        </div>
      </div>
     );
   };
};

