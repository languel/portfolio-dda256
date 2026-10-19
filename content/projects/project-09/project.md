---
title: Image repaint grid
index: 09
meta: Image sampling · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-09.png
embed: sketch/index.html
alt: Screenshot of the image repaint grid p5.js sketch
summary: A grid of shapes repaints the reference image cell by cell.
---
A grid of shapes repaints the reference image cell by cell.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-09/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/BuAEGzv0F).

```javascript
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

      canvas_x = map(img_x, 0, img.width,  0, width)
```
