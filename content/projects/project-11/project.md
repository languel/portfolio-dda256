---
title: Reveal image
index: 11
meta: Masking · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-11.png
preview: media/project-11-preview.png
embed: sketch/index.html
alt: Screenshot of the reveal image p5.js sketch
summary: Draw with a brush to reveal an image hidden under a mask.
---
Draw with a brush to reveal an image hidden under a mask.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-11/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/4H5LdT8np).

```javascript
let imgName = 'assets/Bvouniq.jpg';
let img,imgSrc;
let maskImg;
let maskBrushSize = 15;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  maskImg = createGraphics(width,height);
  imgSrc = await loadImage(imgName); //sampled, ref
  img = createImage(width,height); //active temp image which always starts with ref
  
}

function mouseDragged() {
  maskImg.fill('white');
  maskImg.noStroke();
  maskBrushSize = dist(mouseX,mouseY,pmouseX,pmouseY);
  maskImg.circle(mouseX,mouseY,maskBrushSize);
}

function draw() {
  // background(220);
  background('black');
  //copy the whole src image into our tmp active image
  img.copy(imgSrc,
           0,0,imgSrc.width,imgSrc.height, 
           0,0,i
```
