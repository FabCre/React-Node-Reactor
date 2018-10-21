import React from 'react';
import PropTypes from 'prop-types';

import Matter from 'matter-js';

import './chest1.sass';

/**
 * @class Chest1
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Chest1
 */
export default class Chest1 extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  }

  /**
   * @method componentDidMount
   * @memberof Component.Chest1
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    const { world } = this.context.engine;
    const chest1 = Matter.Bodies.rectangle(544, 414, 64, 64, {
      isStatic: true,
      label: 'chest1'
    });
    Matter.World.addBody(world, chest1);
  }

  /**
   * @method componentWillUnmount
   * @memberof Component.Chest1
   * @desc Code to execute before component destruction.
   */
  componentWillUnmount() {
    const { world } = this.context.engine;
    Matter.World.remove(world, world.bodies[9]);
  }

  /**
   * @method render
   * @memberof Component.Chest1
   * @desc Render the Chest1 component, open or close depending on the state of the quizz.
   */
  render() {
    return (
      <React.Fragment>
        {this.props.quizzAnsweredOpen === 0 && <img className='chest' src="src/images/chest_lvl1.png"/>}
        {this.props.quizzAnsweredOpen === 1 && <img className='chest' src="src/images/open_chest_lvl1.png"/>}
      </React.Fragment>
    );
  };
};
