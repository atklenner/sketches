let balls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 20; i++) {
    balls.push(new Billiard(random(width), random(height), random(1, 5)));
  }
}

function draw() {
  background(0);
  for (let ball of balls) {
    ball.show();
    ball.edges();
    ball.update();
  }
}
