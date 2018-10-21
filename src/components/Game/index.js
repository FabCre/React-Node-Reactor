import React from 'react';
import PropTypes from 'prop-types';
import KeyListener from 'src/utils/key-listener.js';
import Matter from 'matter-js';

import { Stage, World } from 'react-game-kit';
import l10n from 'src/data/l10n';
import GlobalMap from 'src/containers/GlobalMap';
import Reactor from 'src/containers/Reactor';
import Minimap from 'src/containers/UI/Minimap';
import Meta from 'src/containers/UI/Meta';
import Stats from 'src/containers/UI/Stats';
import Bonus from 'src/containers/UI/Bonus';
import Level1 from 'src/containers/Quizzes/Level1';
import Level2 from 'src/containers/Quizzes/Level2';
import Level3 from 'src/containers/Quizzes/Level3';
import FalseAnswer from 'src/containers/Quizzes/FalseAnswer';
// Import d'une loop custom sortie de react-game-kit
import Loop from 'src/utils/loop';

import './game.sass';

/**
 * @class Game
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Game
 */
export default class Game extends React.Component {
  static contextTypes = {
    scale: PropTypes.number,
    engine: PropTypes.object,
    loop: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.context = window.context;
    this.keyListener = new KeyListener();
  };

  /**
   * @method componentDidMount
   * @memberof Component.Game
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    this.keyListener.subscribe([
      this.keyListener.LEFT,
      this.keyListener.RIGHT,
      this.keyListener.UP,
      this.keyListener.DOWN,
      this.keyListener.SPACE,
      this.keyListener.ATTACK_UP,
      this.keyListener.ATTACK_DOWN,
      this.keyListener.ATTACK_LEFT,
      this.keyListener.ATTACK_RIGHT,
      this.keyListener.DEBUGGER_MATTER_ACTIVE,
      this.keyListener.DEBUGGER_MATTER_NOT_ACTIVE
    ]);
  };

  /**
   * @method componentDidUpdate
   * @memberof Component.Game
   * @desc Code to execute after component updates.
   */
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/login');
    }
  };

  /**
   * @method componentWillUnmount
   * @memberof Component.Game
   * @desc Code to execute before component destruction.
   */
  componentWillUnmount = () => {
    this.keyListener.unsubscribe();
  };

  /**
   * @method physicsInit
   * @param {object} engine
   * @see http://brm.io/matter-js/docs/index.html
   * @memberof Component.Game
   * @desc Matter.js physics initial definition / render - allows to create elements in the local world engine.
   */
  physicsInit(engine) {
    // const attackLeft = 0x0004;
    const reactor = 0x0001;
    const gameWall = 0x0006;
    // room walls definition
    const ground = Matter.Bodies.rectangle(544, 800, 1088, 64, {
      isStatic: true,
      label: 'ground',
      category: gameWall,
      collisionFilter: {
        mask: gameWall | reactor
        },
    });
    const leftWall = Matter.Bodies.rectangle(32, 414, 64, 832, {
      id: 4,
      isStatic: true,
      label: 'leftWall',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });
    const rightWall = Matter.Bodies.rectangle(1056, 414, 64, 832, {
      isStatic: true,
      label: 'rightWall',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });
    const topWall = Matter.Bodies.rectangle(544, 32, 1088, 64, {
      isStatic: true,
      label: 'topWall',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });

    // DOOR
    const doorNorth = Matter.Bodies.rectangle(544, 70, 64, 1, {
      //isStatic: true,
      isSensor: true,
      label: 'doorNorth',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });

    const doorSouth = Matter.Bodies.rectangle(544, 763, 64, 1, {
      //isStatic: true,
      isSensor: true,
      label: 'doorSouth',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });

    const doorWest = Matter.Bodies.rectangle(70, 416, 1, 64, {
      //isStatic: true,
      isSensor: true,
      label: 'doorWest',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });

    const doorEast = Matter.Bodies.rectangle(1018, 416, 1, 64, {
      //isStatic: true,
      isSensor: true,
      label: 'doorEast',
      category: gameWall,
        collisionFilter: {
          mask: gameWall | reactor
        },
    });

    // room walls creation
    Matter.World.addBody(engine.world, ground);
    Matter.World.addBody(engine.world, topWall);
    Matter.World.addBody(engine.world, leftWall);
    Matter.World.addBody(engine.world, rightWall);

    Matter.World.addBody(engine.world, doorNorth);
    Matter.World.addBody(engine.world, doorSouth);
    Matter.World.addBody(engine.world, doorWest);
    Matter.World.addBody(engine.world, doorEast);

    const render = Matter.Render.create({
      element: document.getElementById('debug-render'),
      engine: engine,
      options: {
        width: 1088,
        height: 832,
        pixelRatio: 1,
        background: '#fafafa',
        wireframeBackground: 'none',
        hasBounds: false,
        enabled: true,
        wireframes: true,
        showSleeping: true,
        showDebug: true,
        showBroadphase: false,
        showBounds: false,
        showVelocity: false,
        showCollisions: true,
        showSeparations: false,
        showAxes: false,
        showPositions: true,
        showAngleIndicator: false,
        showIds: true,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false
      }
    });
    Matter.Render.run(render);
  };

  /**
   * @method getWrapperStyles
   * @memberof Component.Game
   * @desc Adjust matter.js debugger overlay canvas rendering to bodies position.
   */
  getWrapperStyles() {
    return {
      width: '1088px',
      height: '832px',
      position: 'absolute',
      margin: 'auto',
      transform: 'translate(0px, 0px)',
      transformOrigin: 'top left'
    };
  };

  /**
   * @method getHiddenWrapperStyles
   * @memberof Component.Game
   * @desc Shift matter debugger overlay sprite to hidden state.
   */
  getHiddenWrapperStyles() {
    return {
     display: 'none'
    };
  };

  /**
   * @method getStageStyles
   * @memberof Component.Game
   * @desc Adjust world sprite to Matter.js body position.
   */
  getStageStyles() {
    return {
      width: '1088px',
      height: '832px',
      position: 'relative',
      margin: 'auto',
      transform: 'translate(0px, 0px)',
      transformOrigin: 'top left'
    };
  };

  /**
   * @method render
   * @memberof Component.Game
   * @desc Render the Game component and display the debug overlay when the key 'm' is pressed (key 'l' to remove).
   * Loop = simulates real-time by listening for change every 10ms
   * Stage = simulates coherent space for the world && children components
   * World = simulates physics, interactions, collisions to achieve rigid-body simulation
   * GlobalMap = selects current room component based on provided currentRoom value
   * Minimap = displays a minimap
   * Reactor = enables main character component
   */
  render() {
    return (
      <div className='wrapper'>
      { this.props.quizzState === 1 && <Level1 /> }
      { this.props.quizzState === 2 && <Level2 /> }
      { this.props.quizzState === 3 && <Level3 /> }
      { this.props.quizzState === 4 && <FalseAnswer /> }
        <Loop>
          <Stage style={this.getStageStyles()}>
            <World
              onInit={this.physicsInit}
              onCollision = {this.collisionInit}
              gravity = {{ x: 0, y: 0, scale: 0.001 }}
            >
              <GlobalMap/>
              <Minimap/>
              <Bonus />
              <Stats />
              <Meta />
              { this.props.debugMatter === true ?
                <div id= "debug-render" style= {this.getWrapperStyles()}>
                </div> :
                <div id= "debug-render" style= {this.getHiddenWrapperStyles()}>
                </div>
              }
              <Reactor
                keys={this.keyListener}
              />
            </World>
          </Stage>
        </Loop>
        <div className='version'>{l10n.global.version}</div>
      </div>
    );
  };
};
