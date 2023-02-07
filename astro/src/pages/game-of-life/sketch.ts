import p5 from "p5";

type Alive = 1;
type Dead = 0;
type Grid = Array<Array<Alive | Dead>>;

const sketch = (p: p5) => {
  const width = window.innerWidth;
  const canvasWidth = (8 * width) / 10;
  const canvasHeight = window.innerHeight;

  let cols: number;
  let rows: number;
  let grid: Grid;
  const resolution = 10;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);

    cols = p.floor(canvasWidth / resolution);
    rows = p.floor(canvasWidth / resolution);
    grid = make2DArray(cols, rows);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = p.random([0, 1]);
      }
    }
  }

  p.draw = () => {
    p.background(0);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1) {
          p.fill(255);
          p.stroke(0);
          p.rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }

    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];

        let neighbors = countNeighbors(grid, i, j);

        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }

  grid = next;
  }

  p.mouseClicked = () => {
    let col = p.floor(p.mouseX / resolution);
    let row = p.floor(p.mouseY / resolution);
    grid[col][row] ? (grid[col][row] = 0) : (grid[col][row] = 1);
  }

  function make2DArray(cols: number, rows: number) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  function countNeighbors(grid: Grid, x: number, y: number) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }
}

new p5(sketch);
