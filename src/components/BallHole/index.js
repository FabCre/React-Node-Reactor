import React from 'react';
import PropTypes from 'prop-types';
import Matter from 'matter-js';

import './ballhole.sass';

/**
 * @class BallHole
 * @memberof Component
 * @hideconstructor
 * @classdesc Class BallHole
 */
export default class BallHole extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object
  }
  constructor(props) {
    super(props);
  }

  /**
   * @method componentDidMount
   * @memberof Component.BallHole
   * @desc Code to execute after component render, here matter.js bodies creation in the world engine.
   */
  componentDidMount() {
    const { world } = this.context.engine;
    const trapwin1 = Matter.Bodies.rectangle(958, 702, 128, 128, {
      isStatic: true,
      isSensor: true,
      label: 'trapwin',
    });
    const trap1 = Matter.Bodies.rectangle(224, 286, 320, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap2 = Matter.Bodies.rectangle(352, 94, 64, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap3 = Matter.Bodies.rectangle(544, 382, 64, 256, {
      isStatic: true,
      label: 'trap',
    });
    const trap4 = Matter.Bodies.rectangle(512, 608, 384, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap5 = Matter.Bodies.rectangle(286, 414, 64, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap6 = Matter.Bodies.rectangle(286, 734, 64, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap7 = Matter.Bodies.rectangle(862, 734, 64, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap8 = Matter.Bodies.rectangle(930, 544, 184, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap9 = Matter.Bodies.rectangle(962, 126, 128, 128, {
      isStatic: true,
      label: 'trap',
    });
    const trap10 = Matter.Bodies.rectangle(832, 288, 128, 64, {
      isStatic: true,
      label: 'trap',
    });
    const trap11 = Matter.Bodies.rectangle(608, 256, 64, 128, {
      isStatic: true,
      label: 'trap',
    });

    Matter.World.addBody(world, trapwin1);
    Matter.World.addBody(world, trap1);
    Matter.World.addBody(world, trap2);
    Matter.World.addBody(world, trap3);
    Matter.World.addBody(world, trap4);
    Matter.World.addBody(world, trap5);
    Matter.World.addBody(world, trap6);
    Matter.World.addBody(world, trap7);
    Matter.World.addBody(world, trap8);
    Matter.World.addBody(world, trap9);
    Matter.World.addBody(world, trap10);
    Matter.World.addBody(world, trap11);
  }

  /**
   * @method componentWillUnmount
   * @memberof Component.BallHole
   * @desc Code to execute before component destruction, here matter.js bodies removal.
   */
  componentWillUnmount() {
    const { world } = this.context.engine;
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
    Matter.World.remove(world, world.bodies[9]);
  }

  /**
   * @method render
   * @memberof Component.BallHole
   * @desc Render the BallHole component.
   */
  render() {
    return (
      <React.Fragment>
        <img className='ballhole' src="src/images/base_room.png" />
      </React.Fragment>
    );
  };
};
