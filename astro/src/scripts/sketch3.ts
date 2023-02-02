import p5 from "p5";
const width = window.innerWidth;
const height = window.innerHeight;

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(width, height);
      }

    p.draw = () => {
        p.background(0);
      }
  }

  new p5(sketch);
