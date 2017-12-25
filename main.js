import SquareManager from './Square.js';
import BulletManager from './Bullet.js';

class Game {
  constructor() {
    this._now; 
    this._dt;
    this._last = window.performance.now();
    this.run();
  }

  run() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext('2d');
    requestAnimationFrame(this.loop.bind(this));
  }

  update(dt) {
    SquareManager.update(dt);
    BulletManager.update(dt);
  }

  render(ctx) {
    ctx.clearRect(0, 0, 640, 480);
    SquareManager.render(ctx);
    BulletManager.render(ctx);
  }  

  loop() {
    this._now = window.performance.now();
    this._dt = (this._now - this._last) / 10;
    this.update(this._dt);
    this.render(this.ctx);
    this._last = this._now;
    requestAnimationFrame(this.loop.bind(this));
  }
}

new Game;