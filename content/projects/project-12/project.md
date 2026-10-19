---
title: Concrete poem tool
index: 12
meta: Text · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-12.png
preview: media/project-12-preview.png
embed: sketch/index.html
alt: Screenshot of the concrete poem tool p5.js sketch
summary: Compose concrete poetry with a dot-matrix typeface.
---
Compose concrete poetry with a dot-matrix typeface.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-12/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/q3ZK9Wzo2).

```javascript
let poem = "what a piece of work is ...";

let currentChar = 0;
let bgColor = "antiquewhite";
let lastCharX = 0;
let lastCharY = 0;
let minCharDist = 12;

let scriptFont =  "Caveat";
let dotFont="Monospace";

let imgName='';
let img;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
  
   dotFont = await loadFont("assets/DOTMATRI.TTF");
  textFont(dotFont);
  
}

function draw() {
  
}


function mouseDragged() {
  let d = dist(mouseX, mouseY, lastCharX, lastCharY);
  if (d > minCharDist) {
    
    textSize(max(d,minCharDist));
    text(poem.charAt(currentChar), mouseX, mouseY);
    currentChar = (currentChar + 1) % poem.length;
    lastCharX = mous
```
