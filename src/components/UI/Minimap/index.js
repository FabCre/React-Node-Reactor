import React, { Component } from 'react';

import './minimap.sass';

/**
 * @class Minimap
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Minimap
 */
export default class Minimap extends Component {

  /**
   * @method render
   * @memberof Component.Minimap
   * @desc Render the Minimap component based on current globalMap.
   */
  render() {
    const globalmap = this.props.globalmap;
    const { currentRoomId } = this.props;
    return (
      <div className ="minimap">
        {
          globalmap.map(
            (row) => {
              return row.map((cell, index) => {
                if (cell === 0) {
                  return <div key={index} className="void"></div>;
                }
                else {
                  if (cell.mapRoom) {
                    if (cell.mapRoom.id === currentRoomId) {
                      return <div key={index} className="current"></div>;
                    } else {
                      return <div key={index} className="full"></div>;
                    }
                  } else {
                    return <div key={index} className="full"></div>;
                  }
                }
              });
            })
        }
      </div>
    );
  };
};
