import type p5 from "p5";

const sketch = (p: p5) => {
  const width = window.innerWidth;
  const canvasWidth = (8 * width) / 10;
  const canvasHeight = window.innerHeight;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
  }

  p.draw = () => {
    p.background(0);
  }
}

export default sketch;
