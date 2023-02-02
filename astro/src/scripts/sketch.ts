import p5 from "p5";

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background("#000");
  }
}

new p5(sketch);
