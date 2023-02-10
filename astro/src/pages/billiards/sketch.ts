import type p5 from "p5";
import BilliardBall from "./BilliardBall";

const sketch = (p: p5) => {
  let balls: Array<BilliardBall> = [];
  const width = window.innerWidth;
  const canvasWidth = (8 * width) / 10;
  const canvasHeight = window.innerHeight;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    for (let i = 0; i < 20; i++) {
      balls.push(new BilliardBall(p.random(canvasWidth), p.random(canvasHeight), p.random(1, 5), p));
    }
  }

  p.draw = () => {
    p.background(0);
    for (let ball of balls) {
      ball.show(p);
      ball.edges(canvasWidth, canvasHeight);
      ball.update();
    }
  }
}

export default sketch;
