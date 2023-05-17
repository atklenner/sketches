import type p5 from "p5";
import BilliardBall from "./BilliardBall";

const sketch = (p: p5) => {
  let balls: BilliardBall[] = [];
  const canvasSize = Math.min(window.innerHeight, window.innerWidth);

  p.setup = () => {
    p.createCanvas(canvasSize, canvasSize);
    for (let i = 0; i < 20; i++) {
      balls.push(
        new BilliardBall(p.random(canvasSize), p.random(canvasSize), 2, p)
      );
    }
  };

  p.draw = () => {
    p.background(0);
    for (let ball of balls) {
      ball.show(p);
      ball.edges(canvasSize, canvasSize);
      for (let otherBall of balls) {
        if (ball !== otherBall) {
          ball.collision(otherBall);
        }
      }
      ball.update();
    }
  };
};

export default sketch;
