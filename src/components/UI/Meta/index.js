import React, { Component } from 'react';

import './meta.sass';

/**
 * @class Meta
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Meta
 */
export default class Meta extends Component {
  constructor(props) {
    super(props);
    this.props.initLogger();
  }

  /**
   * @method render
   * @memberof Component.Meta
   * @desc Render the Meta information component.
   */
  render() {
    const logger = this.props.logger;
    return (
      <div className ='meta'>
        <div className='logger'>{logger}</div>
      </div>
    );
  };
};
