let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  array = new Array(width);
  for (let i = 0; i < width; i++) {
    array[i] = random(height);
  }
}

function draw() {
  background(0);
  array.forEach((value, index) => {
    stroke(255);
    line(index, height, index, height - value);
  });
}
