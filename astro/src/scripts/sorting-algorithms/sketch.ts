import p5 from "p5";

const sketch = (p: p5) => {
  let array: Array<number>;
  let cycles = 0;
  let reset;
  const width = window.innerWidth;
  const height = window.innerHeight;

  p.setup = () => {
    p.createCanvas(width, height);
    array = new Array(width);
    for (let i = 0; i < width; i++) {
      array[i] = p.noise(i / 100.0) * height;
    }
    reset = p.createButton("Reset");
    reset.position(0, 0);
    // reset.mousePressed(resetSort);
  }

  p.draw = () => {
    p.background(0);
    array.forEach((value, index)=> {
      p.stroke(255);
      p.line(index, height, index, height - value);
    });
    if (cycles < array.length) {
      for (let i = 0; i < width - 1; i++) {
        if (array[i] > array[i + 1]) {
          let val = array[i + 1];
          array[i + 1] = array[i];
          array[i] = val;
        }
      }
    } else {
      p.noLoop();
    }
    cycles++;
  }
}

new p5(sketch);
