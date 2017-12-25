class BulletManager {
  constructor() {
    this.list = {};
  }

  create(x, y) {
    let bullet = {
      id: Math.random(),
      x: x,
      y: y
    };

    bullet.render = (ctx) => {
      ctx.strokeRect(bullet.x, bullet.y, 5, 5); 
    }

    bullet.update = (dt) => {
      bullet.y -= 1 * dt;
      if (bullet.y < 0) {
        delete this.list[bullet.id];
      }
    }

    this.list[bullet.id] = bullet;
    return bullet;

  }

  update(dt) {
    for(let id in this.list) {
      this.list[id].update(dt)
    }
  }

  render(ctx) {
    for(let id in this.list) {
      this.list[id].render(ctx)
    }
  }
}

export default new BulletManager;