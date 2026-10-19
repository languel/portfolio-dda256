---
title: Interactive minimal avatar
index: 06
meta: Interaction · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-06.png
preview: media/project-06-preview.png
embed: sketch/index.html
alt: Screenshot of the interactive minimal avatar p5.js sketch
summary: A minimal character that responds to clicks and movement.
---
A minimal character that responds to clicks and movement.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-06/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/Fas_2Vz6E).

```javascript
////////
// interactive unicursal avatar
// expressive single line drawing e.g.
// https://www.pablopicasso.org/assets/img/drawings/dancer.jpg
////////

let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = new Chain();
}

function draw() {
  background(220);
  c.draw();
}

///////
function mousePressed(event) {
  console.log(event);
  if (event.shiftKey) {
    c.addNodeAtEnd(mouseX, mouseY);
  }
}

////////

class Chain {
  // points : array of points
  // update
  // draw
  // interact
  // add link
  // create link
  // pose
  constructor() {
    this.points = [];
    this.r = 10;
    this.c = 'black';
  }

  addNodeAtEnd(_x, _y) {
    let p = { x: _x, y: _y };
    t
```
