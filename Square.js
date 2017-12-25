import Keyboard from './Keyboard.js';
import Bullet from './Bullet.js';

class SquareManager {
  constructor() {
    this.list = {};
    this.create(50, 50);
  }

  create(x, y) {
    let square = {
      id: Math.random(),
      x: x,
      y: y,
      width: 10,
      height: 10,
      timer: 0,
      fireRate: 15
    }

    square.update = (dt) => {
      square.timer += dt;
      if(Keyboard.keys['up']) {
        square.y -= 1 * dt
      }

      if(Keyboard.keys['down']) {
        square.y += 1 * dt;
      }

      if(Keyboard.keys['right']) {
        square.x += 1 * dt
      }

      if(Keyboard.keys['left']) {
        square.x -= 1 * dt;
      }

      if(Keyboard.keys['fire']) {
        if (square.timer > square.fireRate) {
          square.fire();
          square.timer = 0;
        }
      }
    }

    square.render = (ctx) => {
      ctx.fillRect(square.x, square.y, 10, 10);
    }

    square.fire = () => {
      Bullet.create(square.x, square.y);
    }

    this.list[square.id] = square
    return square;
  }

  update(dt) {
    for(let id in this.list) {
      this.list[id].update(dt);
    }
  }

  render(ctx) {
    for(let id in this.list) {
      this.list[id].render(ctx);
    }
  }
}

export default (new SquareManager);