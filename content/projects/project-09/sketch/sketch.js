// let imgURL = 'https://www.worldhistory.org/uploads/images/15597.png';

let imgURL = "assets/seurat-ref.png";
let img; //ref to img content in mem

async function setup() {
  createCanvas(windowWidth, windowHeight);
  img = await loadImage(imgURL);
  // image(img, 0, 0, width, height);
}

function draw() {
  let img_x;
  let img_y;
  let canvas_x;
  let canvas_y;
  randomSeed(4);
  background('bisque');

  // let sample_step = 10+100*mouseX/width;
  let sample_step = 20;
  for (img_y = 0; img_y < img.height; img_y += sample_step) {
    for (img_x = 0; img_x < img.width; img_x += sample_step) {
      sample_color = img.get(img_x, img_y);

      canvas_x = map(img_x, 0, img.width,  0, width);
      canvas_y = map(img_y, 0, img.height, 0, height);
      stroke(sample_color); 

      // noStroke();
      noFill();
      strokeWeight(2);
      rectMode(CENTER);
      rect(canvas_x, canvas_y, 
           random(sample_step),
           random(sample_step));
      noStroke();
      fill(sample_color);
      ellipseMode(CENTER);
      circle(canvas_x, canvas_y,
             random(0.3 * sample_step, 2 * sample_step));
    }
  }
}
