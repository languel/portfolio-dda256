---
title: Random image sampling
index: 08
meta: Image sampling · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-08.png
preview: media/project-08-preview.png
embed: sketch/index.html
alt: Screenshot of the random image sampling p5.js sketch
summary: Random samples from a reference image rebuild it as a field of dots.
---
Random samples from a reference image rebuild it as a field of dots.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-08/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/FsRxiS03O).

```javascript
let imgFile = "assets/seurat-ref.png";
let img;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  background('bisque');
  img = await loadImage(imgFile);
  image(img,0,0,width,height);
}
 
async function drawRandomDaub() {
  //canvas coords
  // draw in a chosen area
  // let canvas_x = random(0.25*width, 0.50*width);
  // let canvas_y = random(0.40*height, 0.80*height);

  let canvas_x = random(0.0*width, 1.0*width);
  let canvas_y = random(0.0*height, 1.0*height);


  // uncomment this to get whole image
  let image_x = img.width*(canvas_x/width);
  let image_y = img.height*(canvas_y/height);
  // let image_x = map(canvas_x, 
  //                   0.25*width, 0.50*width,  
  //       
```
