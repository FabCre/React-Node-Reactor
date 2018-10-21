export default class KeyListener {
   LEFT = 81; // q left 113
   RIGHT = 68; // d right
   UP = 90; // z up
   DOWN = 83; // s down
   SPACE = 32; // space : shift mode
   ATTACK_UP = 38; // arrow up
   ATTACK_DOWN = 40; // arrow down
   ATTACK_LEFT = 37; // arrow left
   ATTACK_RIGHT = 39; // arrow right

   // Debugger Matter Overlay
   DEBUGGER_MATTER_ACTIVE = 77; // ctrl right or left
   DEBUGGER_MATTER_NOT_ACTIVE = 76;

   constructor() {
     this.keys = {};

     this.down = this.down.bind(this);
     this.up = this.up.bind(this);
     this.isDown = this.isDown.bind(this);
     this.subscribe = this.subscribe.bind(this);
     this.unsubscribe = this.unsubscribe.bind(this);
   }

   down(event) {
     if (event.keyCode in this.keys) {
       event.preventDefault();
       this.keys[event.keyCode] = true;
     }
   }

   up(event) {
     if (event.keyCode in this.keys) {
       event.preventDefault();
       this.keys[event.keyCode] = false;
     }
   }

   isDown(keyCode) {
     return this.keys[keyCode] || false;
   }

   subscribe(keys) {
     window.addEventListener('keydown', this.down);
     window.addEventListener('keyup', this.up);

     keys.forEach((key) => {
       this.keys[key] = false;
     });
   }

   unsubscribe() {
     window.removeEventListener('keydown', this.down);
     window.removeEventListener('keyup', this.up);
     this.keys = {};
   }
}
