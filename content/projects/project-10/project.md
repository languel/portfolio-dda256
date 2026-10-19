---
title: Cutout collage
index: 10
meta: Collage · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-10.png
embed: sketch/index.html
alt: Screenshot of the cutout collage p5.js sketch
summary: Cut and arrange image fragments into a surrealist collage.
---
Cut and arrange image fragments into a surrealist collage.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-10/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/TmQ5pR9lS).

```javascript
let imgFile = "assets/andre_breton.jpeg";
let img; //place in mem

async function setup() {
  createCanvas(windowWidth, windowHeight);
  img = await loadImage(imgFile);
  reloadImage();
}

async function reloadImage() {
  img = await loadImage(imgFile);
  img.resize(width, height);
  image(img,0,0,width,height);
}

function windowResized() {
  //event when window is resize
  resizeCanvas(windowWidth,windowHeight);
  reloadImage();

  console.log(
    "w h:" + width + " " + height + "|" + windowWidth + " " + windowHeight
  );
}

function draw() {
  //image(img,0,0,width, height);
  
  let x1 = round(random(width));
  let y1 = round(random(height));
  let w1 = round(random(0.1,0.5*width));
  l
```
