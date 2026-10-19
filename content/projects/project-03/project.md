---
title: Simple particles
index: 03
meta: Particle system · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-03.png
embed: sketch/index.html
alt: Screenshot of the simple particles p5.js sketch
summary: The minimal particle class: position, velocity, and a draw loop.
---
The minimal particle class: position, velocity, and a draw loop.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-03/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/HVdKuYReA).

```javascript
class Particle {
  //blueprint for making objects (instances)

  constructor(_x =100, _y=100, _r=10, _c='gold', _vx=0, _vy=0) { //declare with default values
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.c = _c;
    this.vx = _vx;
    this.vy = _vy;

  }

  draw() {
    //method
    fill(this.c);
    stroke(this.c);
    circle(this.x, this.y, this.r);
  }

  update() {
    this.x = (this.x + this.vx) % width;
    this.y = (this.y + this.vy ) % height;
  }
}

//////////////////////////


// things that need to persist for the world
let bgColor = "slategray";

let dot1 = new Particle(); //
let dot2;

function setup() {
  createCanvas(500, 500);
  background(bgColor);

  dot1 = ne
```
