import "@picocss/pico";
import type p5 from "p5";
import BilliardBall from "./BilliardBall";

const sketch = (p: p5) => {
  let balls: Array<BilliardBall> = [];
  const canvasSize = Math.min(window.innerWidth, window.innerHeight);

  p.setup = () => {
    p.createCanvas(canvasSize, canvasSize);
    for (let i = 0; i < 20; i++) {
      balls.push(
        new BilliardBall(
          p.random(canvasSize),
          p.random(canvasSize),
          p.random(1, 5),
          p
        )
      );
    }
  };

  p.draw = () => {
    p.background(0);
    for (let ball of balls) {
      ball.show(p);
      ball.edges(canvasSize, canvasSize);
      ball.update();
    }
  };
};

export default sketch;
