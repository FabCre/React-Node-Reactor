import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Matter from 'matter-js';
import { Body, Sprite } from 'react-game-kit/lib';
import shuffle from 'shuffle-array';
import _ from 'lodash';

/**
 * @class Boss
 * @memberof Component
 * @hideconstructor
 * @classdesc Class Boss
 */
export default class Boss extends Component {
  static propTypes = {
    keys: PropTypes.object,
    onEnterRoom: PropTypes.func
  };

  static contextTypes = {
    engine: PropTypes.object,
    scale: PropTypes.number,
    loop: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handlePlayStateChanged = this.handlePlayStateChanged.bind(this);
    this.bossPattern = _.throttle(this.bossPattern, 10000, {
      'leading': true,
      'trailing': false
    });
  }

  /**
   * @method componentDidMount
   * @memberof Component.Boss
   * @desc Code to execute after component render.
   */
  componentDidMount() {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
    Matter.Body.setStatic(this.context.engine.world.bodies[9], true);
  }

  /**
   * @method componentWillUnmount
   * @memberof Component.Boss
   * @desc Code to execute before component destruction.
   */
  componentWillUnmount() {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
  }

  /**
   * @method Move
   * @memberof Component.Boss
   * @desc Movement method via matter
   */
  move(body, speed, zero) {
    Matter.Body.setVelocity(body, {speed, zero});
  };

  /**
   * @method HandleIdleState
   * @memberof Component.Boss
   * @desc Boss idle state script handling
   */
  HandleIdleState(){
    const changeBossAction = () => {
      setTimeout(() => {
        this.props.newBossAction(this.props.boss.bossAction);
      }, 300);
    }

    this.props.boss.bossState = 0;
    this.props.boss.bossRepeat = false;

    /**
     * @method changeBossAction
     * @memberof Component.Boss.HandleIdleState
     * @desc Trigger the next action call with a delay
     */
    changeBossAction();
  };

  /**
   * @method HandleMovingState
   * @memberof Component.Boss
   * @desc Boss movement determination (direction) and trigger
   */ 
  HandleMovingState(speed) {
    const { body } = this.body;
    this.move(body, speed, 0);
  };

  /**
   * @method HandleAttackingState
   * @memberof Component.Boss
   * @desc Boss attack determination and trigger
   */
  HandleAttackingState() {
    const rdmAttack = shuffle([this.frontAttack, this.sideAttack]);
    const changeBossAction = () => {
        setTimeout(() => {
          this.props.newBossAction(this.props.boss.bossAction);
        }, 5000);
      }
    // TODO on cree un array avec 2 patterns d'attaque qui est melange
    const attackPatterns = () => {rdmAttack[0]()};
    // trigger attack
    attackPatterns();

    /**
     * @method changeBossAction
     * @memberof Component.Boss.HandleAttackingState
     * @desc Switch the boss action type excluding the current one
     */     
    changeBossAction();
  };

  /**
   * @method frontAttack
   * @memberof Component.Boss
   * @desc FrontAttack method, handeling matter.js logic for front body 
   */
  frontAttack = () => {
    const attack = 0x0003;
    const reactor = 0x0001;
    const { world } = this.context.engine;
    const { body } = this.body;
   
    this.props.boss.bossState = 2;
    this.props.boss.bossRepeat = this.props.bossState < 4;

    const boss_attack_front = Matter.Bodies.rectangle(body.position.x, (body.position.y + 220), 64, 400, {
      isSensor: true,
      label: 'boss_attack_front',
      catergory: attack,
    });
    Matter.World.addBody(world, boss_attack_front);
    this.props.displayFrontAttack();
 
    setTimeout(() => {
      //this.props.boss.bossState = 3;
      //this.props.boss.bossRepeat = false;
      Matter.World.remove(world, world.bodies[10]);
      this.props.hideFrontAttack();
      this.props.boss.bossState = 0;  
      this.props.boss.bossAction = 'Idle'; 
      }, 5000);
  };

  /**
   * @method sideAttack
   * @memberof Component.Boss
   * @desc SideAttack method, handeling matter.js logic for leftSide / rightSide bodies 
   */
  sideAttack = () => {
    const attackLeft = 0x0004;
    const attackRight = 0x0005;
    const { world } = this.context.engine;
    const { body } = this.body;
   
    this.props.boss.bossState = 4;
    this.props.boss.bossRepeat = false;

    const boss_attack_leftSide = Matter.Bodies.rectangle(body.position.x - 40, (body.position.y - 77), 32, 1000, {
      isSensor: true,
      label: 'boss_attack_leftside',
      category: attackLeft,
    });
    const boss_attack_rightSide = Matter.Bodies.rectangle(body.position.x + 40, (body.position.y - 77), 32, 1000, {
      isSensor: true,
      label: 'boss_attack_rightside',
      category: attackRight,
    });
    Matter.World.addBody(world, boss_attack_leftSide);

    Matter.World.addBody(world, boss_attack_rightSide);
    this.props.displaySideAttack();
   
    const sideAttack = setInterval(this.rotate, 160);
    
    setTimeout(() => {
      this.props.hideSideAttack();
      //this.props.boss.bossState = 5;
      //this.props.boss.bossRepeat = false;
      Matter.Body.setAngle(world.bodies[10], 90);
      Matter.World.remove(world, world.bodies[10]);
      Matter.World.remove(world, world.bodies[10]);
      this.props.boss.bossState = 0;
      this.props.boss.bossAction = 'Idle';
      clearInterval(sideAttack);
      }, 5000);
  };

  /**
   * @method rotate
   * @memberof Component.Boss
   * @desc Rotate method used by sideAttack elements
   */
  rotate = () => {
    const { world } = this.context.engine;

    Matter.Body.rotate(world.bodies[10], 0.05);
    Matter.Body.rotate(world.bodies[11], -0.05);
    this.props.angleSideAttack(world.bodies[10].angle);
  };

  /**
   * @method bossPattern
   * @memberof Component.Boss
   * @desc Boss Pattern trigger from current state values
   */
  bossPattern() {
    if (this.props.boss.bossAction === 'Idle') {
      return this.HandleIdleState();
    } else {
      return this.HandleAttackingState();
    }
  };

  /**
   * @method handlePlayStateChanged
   * @memberof Component.Boss
   * @desc Boss animation state listener, issued from react-game-kit
   */
  handlePlayStateChanged(state) {
    this.props.boss.spritePlaying = state ? true : false;
  };

  /**
   * @method getBossWrapperStyles
   * @memberof Component.Boss
   * @desc Adjust boss sprite to Matter.js body position.
   */
  getBossWrapperStyles() {
      return {
        width: 250,
        height: 250,
        position: 'absolute',
        transform: `translate(${310}px, ${60}px)`,
        transformOrigin: 'left top'
      };
  };

  /**
   * @method getFrontAttackWrapperStyles
   * @memberof Component.Boss
   * @desc Boss frontAttack visual rendering, based on Matter.js body
   */
  getFrontAttackWrapperStyles() {
    const bodies = this.context.engine.world.bodies;
    if (this.props.boss.frontAttack === true) {
      const frontAttackX = bodies[10].position.x;
      const frontAttackY = bodies[10].position.y;
      return {
        width: 64,
        height: 400,
        position: 'absolute',
        transform: `translate(${frontAttackX - 342.5}px, ${frontAttackY - 245}px)`,
        transformOrigin: 'left top',
        background: 'url(src/images/bossAssets/frontAttack.png)',
        zIndex: 666
      };
    };
  };

  /**
   * @method getLeftAttackWrapperStyles
   * @memberof Component.Boss
   * @desc Boss sideAttack left part visual rendering, based on Matter.js body
   */
  getLeftAttackWrapperStyles() {
      const bodies = this.context.engine.world.bodies;
      if (this.props.boss.sideAttack === true) {
      const leftAttackX = bodies[10].position.x;
      const leftAttackY = bodies[10].position.y;
      const leftAttackAngle = bodies[10].angle;
      return {
        width: 32,
        height: 1000,
        position: 'absolute',
        transform: `translate(${leftAttackX - 325}px, ${leftAttackY - 60}px) rotate(${leftAttackAngle * 58.064}deg)`,
        transformOrigin: 'center top',
        background: 'url(src/images/bossAssets/sideAttack.png)',
        zIndex: 666
      };
    };
  };

  /**
   * @method getRightAttackWrapperStyles
   * @memberof Component.Boss
   * @desc Boss sideAttack right part visual rendering, based on Matter.js body
   */
  getRightAttackWrapperStyles() {
    const bodies = this.context.engine.world.bodies;
    if (this.props.boss.sideAttack === true) {
      const rightAttackX = bodies[11].position.x;
      const rightAttackY = bodies[11].position.y;
      const rightAttackAngle = bodies[11].angle;
      return {
        width: 32,
        height: 1000,
        position: 'absolute',
        transform: `translate(${rightAttackX - 325}px, ${rightAttackY - 60}px) rotate(${rightAttackAngle * 58.064}deg)`,
        transformOrigin: 'center top',
        background: 'url(src/images/bossAssets/sideAttack.png)',
        zIndex: 666
      };
    };
  };

  /**
   * @method checkIfBossAlive
   * @memberof Component.Boss
   * @desc Event listener on boss HP value, trigger game's end flag
   */
  checkIfBossAlive() {
    if (this.props.boss.bossStats.pv <= 0) {
      this.props.deathBossAnimation();
    }
    else {
      this.bossPattern();
    }
  }

  /**
   * @method update
   * @memberof Component.Boss
   * @desc Event listener based on game loop.
   * @see {@link /src/utils/game-loop.js}
   */
  update() {
    this.checkIfBossAlive();
  };

  /**
   * @method render
   * @memberof Component.Boss
   * @desc Render the Boss component.
   */
  render() {
    const { bossRepeat, bossState } = this.props.boss;
    const boss = 0x0002;
    return ( 
    <div id='boss' style = {this.getBossWrapperStyles()} >
    
      { this.props.boss.frontAttack === true && <div
        className='frontAttack'
        style={this.getFrontAttackWrapperStyles()}></div>}

      { this.props.boss.sideAttack === true && <div 
        className='rightAttack'
        style={this.getRightAttackWrapperStyles()}></div>}

      { this.props.boss.sideAttack === true && <div 
        className='leftAttack'
        style={this.getLeftAttackWrapperStyles()}></div> }

      <Body args = {[544, 314, 160, 200]}
      scale = {0.46}
      inertia = {Infinity}
      category={boss}
      label = {'Boss'}
      // TODO compatibility issue With non webkit browsers
      ref = {boss => {this.body = boss;}} >
      <Sprite 
      repeat = {bossRepeat}
      onPlayStateChanged = {this.handlePlayStateChanged}
      src = "src/images/boss.png"
      scale = {0.46}
      state = {bossState}
      steps = {
        [
         0, 1, 2, 3, 4, 5,
        ]
      }
      ticksPerFrame = {14}
      tileSize = {256}
      tileHeight = {1024}
      tileWidth = {1024}
      />
      </Body>
      </div>
    );
  }
}
