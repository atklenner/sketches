import type p5 from "p5";
import createButton from "./CreateButton";

enum KEYS {
  BUBBLE_KEY = "Bubble Sort",
  SELECTION_KEY = "Selection Sort",
  INSERTION_KEY = "Insertion Sort",
  ODD_EVEN_KEY = "Odd-Even Sort",
  COMB_KEY = "Comb Sort",
  COCKTAIL_SHAKER_KEY = "Cocktail Shaker Sort",
}

const sketch = (p: p5) => {
  let array: Array<number>;
  let cycles: number = 0;
  let bValue: number;
  const canvasSize = Math.min(window.innerWidth, window.innerHeight);
  const WIDTH = canvasSize;
  const HEIGHT = canvasSize;

  let currentKey: string;

  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT).parent("p5");
    bValue = p.random(255);
    array = new Array(WIDTH);
    for (let i = 0; i < WIDTH; i++) {
      array[i] = p.noise(i / 100.0 + p.random(10000)) * HEIGHT;
    }

    createButton(p, "Bubble Sort", () => changeAlgorithm(KEYS.BUBBLE_KEY));
    createButton(p, "Selection Sort", () =>
      changeAlgorithm(KEYS.SELECTION_KEY)
    );
    createButton(p, "Insertion Sort", () =>
      changeAlgorithm(KEYS.INSERTION_KEY)
    );
    createButton(p, "Odd-Even Sort", () => changeAlgorithm(KEYS.ODD_EVEN_KEY));
    createButton(p, "Comb Sort", () => changeAlgorithm(KEYS.COMB_KEY));
    createButton(p, "Cocktail Shaker Sort", () =>
      changeAlgorithm(KEYS.COCKTAIL_SHAKER_KEY)
    );

    p.textSize(32);
  };

  p.draw = () => {
    p.background("black");
    p.text(currentKey, 10, 35);
    p.fill(255, 255, 255);
    array.forEach((value, index) => {
      let rValue = (value / HEIGHT) * 255;
      let gValue = (index / array.length) * 255;
      p.stroke(rValue, gValue, bValue);
      p.line(index, HEIGHT, index, HEIGHT - value);
    });
    if (cycles < array.length) {
      switch (currentKey) {
        // BUBBLE SORT
        case KEYS.BUBBLE_KEY:
          for (let i = 0; i < array.length - 1 - cycles; i++) {
            if (array[i] > array[i + 1]) {
              swap(array, i + 1, i);
            }
          }
          break;

        // SELECTION SORT
        case KEYS.SELECTION_KEY:
          let minIndex = cycles;
          for (let i = cycles + 1; i < array.length - 1; i++) {
            if (array[i] < array[minIndex]) {
              minIndex = i;
            }
          }
          swap(array, cycles, minIndex);
          break;

        // INSERTION SORT
        case KEYS.INSERTION_KEY:
          for (let i = cycles; i > 0; i--) {
            if (array[i] < array[i - 1]) {
              swap(array, i - 1, i);
            }
          }
          break;

        // ODD-EVEN SORT
        case KEYS.ODD_EVEN_KEY:
          for (let i = 1; i < array.length - 1; i += 2) {
            if (array[i] > array[i + 1]) {
              swap(array, i, i + 1);
            }
          }
          for (let i = 0; i < array.length - 1; i += 2) {
            if (array[i] > array[i + 1]) {
              swap(array, i, i + 1);
            }
          }
          cycles++; // this does twice the amount of sorting for each cycle
          break;

        // COMB SORT
        case KEYS.COMB_KEY:
          let gap = Math.floor(array.length / Math.pow(1.3, cycles + 1));
          for (let i = gap; i < array.length - 1; i++) {
            if (array[i] < array[i - gap]) {
              swap(array, i, i - gap);
            }
          }
          break;

        // COCKTAIL SHAKER SORT
        case KEYS.COCKTAIL_SHAKER_KEY:
          for (let i = cycles; i < array.length - 1 - cycles; i++) {
            if (array[i] > array[i + 1]) {
              swap(array, i + 1, i);
            }
          }
          for (let i = array.length - 1 - cycles; i > 0 + cycles; i--) {
            if (array[i] < array[i - 1]) {
              swap(array, i, i - 1);
            }
          }
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
    // bValue = p.random(255);
    cycles = 0;
    for (let i = 0; i < array.length; i++) {
      array[i] = p.noise(i / 100.0 + p.random(10000)) * HEIGHT;
    }
    p.loop();
  }

  function changeAlgorithm(algoKey: string) {
    currentKey = algoKey;
    resetSort();
  }

  function swap(arr: number[], i: number, j: number) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
};

export default sketch;
