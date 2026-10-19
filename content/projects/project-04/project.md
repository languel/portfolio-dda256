---
title: Particle interactions
index: 04
meta: Particle system · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-04.png
preview: media/project-04-preview.png
embed: sketch/index.html
alt: Screenshot of the particle interactions p5.js sketch
summary: Particles that react to the pointer and to each other.
---
Particles that react to the pointer and to each other.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-04/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/xi5Yl99pe).

```javascript
const N_PARTICLES = 70;

let int_threshold = 0.1; //fraction of world size

let activeParticle;

class Particle {
  //blueprint for making objects (instances)

  constructor(_x = 100, _y = 100, _r = 10, _c = "gold", _vx = 0, _vy = 0) {
    //declare with default values
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.c = _c;
    this.vx = _vx;
    this.vy = _vy;
    this.label = "";
  }

  draw() {
    //method
    fill(this.c);
    stroke(this.c);
    circle(this.x, this.y, this.r);
    stroke("white");
    text(this.label, this.x, this.y);
  }

  // interact( other) {

  // }

  update() {
    this.x = this.x + this.vx;
    if (this.x > width) this.x = 0;
    if (this.x < 0) thi
```
