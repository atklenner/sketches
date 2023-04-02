import type p5 from "p5";

const sketch = (p: p5) => {
  let array: Array<number>;
  let cycles: number = 0;
  let reset, bubble, selection;
  let bValue: number;
  const pageWidth = window.innerWidth;
  const width = (8 * pageWidth) / 10;
  const height = window.innerHeight;

  const BUBBLE_KEY = "bubble";
  const SELECTION_KEY = "selection";
  let currentKey: string;

  p.setup = () => {
    p.createCanvas(width, height).parent("p5");
    bValue = p.random(255);
    array = new Array(width);
    for (let i = 0; i < width; i++) {
      array[i] = p.noise(i / 100.0 + p.random(10000)) * height;
    }
    reset = p.createButton("Reset");
    reset.parent("buttons");
    reset.mousePressed(resetSort);

    bubble = p.createButton("Bubble Sort");
    bubble.parent("buttons");
    bubble.mousePressed(() => changeAlgorithm(BUBBLE_KEY));

    selection = p.createButton("Selection Sort");
    selection.parent("buttons");
    selection.mousePressed(() => changeAlgorithm(SELECTION_KEY));
  };

  p.draw = () => {
    p.background(bValue);
    array.forEach((value, index) => {
      let rValue = (value / height) * 255;
      let gValue = (index / array.length) * 255;
      p.stroke(rValue, gValue, bValue);
      p.line(index, height, index, height - value);
    });
    if (cycles < array.length) {
      switch (currentKey) {
        // BUBBLE SORT
        case BUBBLE_KEY:
          for (let i = 0; i < width - 1 - cycles; i++) {
            if (array[i] > array[i + 1]) {
              let val = array[i + 1];
              array[i + 1] = array[i];
              array[i] = val;
            }
          }
          break;
        // SELECTION SORT
        case SELECTION_KEY:
          let minIndex = cycles;
          for (let i = cycles + 1; i < width - 1; i++) {
            if (array[i] < array[minIndex]) {
              minIndex = i;
            }
          }
          let swap = array[cycles];
          array[cycles] = array[minIndex];
          array[minIndex] = swap;
          break;

        default:
          p.noLoop();
          break;
      }
    } else {
      p.noLoop();
      console.log("stopped sorting!");
    }
    cycles++;
  };

  function resetSort() {
    bValue = p.random(255);
    cycles = 0;
    for (let i = 0; i < width; i++) {
      array[i] = p.noise(i / 100.0 + p.random(10000)) * height;
    }
    p.loop();
  }

  function changeAlgorithm(algoKey: string) {
    cycles = 0;
    currentKey = algoKey;
    if (!p.isLooping()) {
      resetSort();
    }
    p.loop();
  }
};

export default sketch;
