---
title: Image brush
index: 07
meta: Image sampling · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-07.png
preview: media/project-07-preview.png
embed: sketch/index.html
source: sketch/sketch.js
alt: Screenshot of the image brush p5.js sketch
summary: Paint with color sampled from a reference image (Seurat).
---
Paint with color sampled from a reference image (Seurat).

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-07/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/vuuZ-YAiD).

```javascript
let imgName = 'assets/seurat-ref.png';
let img;


async function setup() { // used to be preload() 
  createCanvas(windowWidth,windowHeight);
  //loads img asynchronously
  img = await loadImage(imgName);
  background('bisque');

  // image(img, 0,0, width,height);
}

function draw() {

}

function mouseDragged() {
  let brushSize = 30;
  imageMode(CENTER);
  brushSize = abs(mouseX-pmouseX) + abs(mouseY-pmouseY);
  image(img, mouseX,mouseY,brushSize,brushSize);
}
```
