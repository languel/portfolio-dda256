---
title: Expressive brush
index: 01
meta: Drawing · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-01.png
preview: media/project-01-preview.png
embed: sketch/index.html
alt: Screenshot of the expressive brush p5.js sketch
summary: A drag-driven line brush: stroke color and shape respond to mouse speed.
---
A drag-driven line brush: stroke color and shape respond to mouse speed.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-01/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/jTgt0xBTn).

```javascript
let bgColor = "black";
let fgColor1 = "gold";
let fgColor2 = "pink";

setup = () => { //modern ES6 js syntax
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
};

function mouseDragged() {
  // dist(x1,y1,x2,y2) is distance between two point
  let brushSize = dist(pmouseX, pmouseY, mouseX, mouseY); 
  stroke(fgColor1);
  noFill();
  
  // ellipse(mouseX, mouseY, 10);
  // rect(mouseX,mouseY,brushSize);
  rectMode(CORNER)
  // rect(mouseX,mouseY,abs(pmouseX-mouseX),abs(pmouseY-mouseY))
  stroke(fgColor2);

  line(pmouseX, pmouseY, mouseX, mouseY);
  stroke('aquamarine');
  line(mouseX,mouseY,
       mouseX + (pmouseY-mouseY) ,
       mouseY - (pmouseX-mouseX));

  stroke('teal');
  line(mouseX
```
