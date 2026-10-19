---
title: Dynamic brush
index: 02
meta: Drawing · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-02.png
embed: sketch/index.html
alt: Screenshot of the dynamic brush p5.js sketch
summary: A simple brush whose size follows the distance the mouse travels each frame.
---
A simple brush whose size follows the distance the mouse travels each frame.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-02/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/DaqCLzs9V).

```javascript
let bgColor = 'gold';
let fgColor = 'red';

function setup() {
  createCanvas(400, 400);
  background(bgColor);
}

function draw() {
  fill("brown");
  ellipse(100, 300, 20);
}

function mouseDragged() {
  let r = dist(mouseX,mouseY,pmouseX,pmouseY);
  rect(mouseX, mouseY, r);
}

function keyPressed() {
  if(key === ' ') {
    background(bgColor);
  }
}
```
