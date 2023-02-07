import p5 from "p5";

const sketch = (p: p5) => {
  let array: Array<number>;
  let cycles: number = 0;
  let reset;
  let bValue: number;
  const pageWidth = window.innerWidth
  const width = (8 * pageWidth) / 10;
  const height = window.innerHeight;

  p.setup = () => {
    p.createCanvas(width, height).parent("p5");
    bValue = p.random(255);
    array = new Array(width);
    for (let i = 0; i < width; i++) {
      array[i] = p.noise(i / 100.0 + p.random(10000)) * height;
    }
    reset = p.createButton("Reset");
    reset.parent("p5");
    reset.position(0, 0);
    reset.mousePressed(resetSort);
  }

  p.draw = () => {
    p.background(bValue);
    array.forEach((value, index)=> {
      let rValue = (value / height) * 255;
      let gValue = (index / array.length) * 255;
      p.stroke(rValue, gValue, bValue);
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

  function resetSort() {
    bValue = p.random(255);
    cycles = 0;
    for (let i = 0; i < width; i++) {
      array[i] = p.noise(i / 100.0 + p.random(10000)) * height;
    }
    p.loop();
  }
}

new p5(sketch);
