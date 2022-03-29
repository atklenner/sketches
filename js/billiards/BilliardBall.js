let mu = 0.01;

class BilliardBall {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-20, 20), random(-20, 20));
    this.mass = m;
    this.r = 16 * sqrt(m);
    this.color = color(random(255), random(255), random(255));
  }

  calcFriction() {
    let friction = this.vel.copy();
    friction.setMag(-1 * mu * this.mass);
    return friction;
  }

  update() {
    this.vel.add(this.calcFriction());
    this.pos.add(this.vel);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } else if (this.pos.y <= this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  collision(other) {
    let mt = this.mass + other.mass;
    // if (p5.Vector.dist(this.pos, other.pos) <= this.r + other.r) {
    //   this.vel.x =
    //     ((this.mass - other.mass) * this.vel.x) / mt +
    //     (2 * other.mass * other.vel.x) / mt;
    //   other.vel.x =
    //     (2 * this.mass * this.vel.x) / mt +
    //     ((other.mass - this.mass) * other.vel.x) / mt;
    //   this.vel.y =
    //     ((this.mass - other.mass) * this.vel.y) / mt +
    //     (2 * other.mass * other.vel.y) / mt;
    //   other.vel.y =
    //     (2 * this.mass * this.vel.y) / mt +
    //     ((other.mass - this.mass) * other.vel.y) / mt;
    // }
  }

  show() {
    stroke(this.color);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
