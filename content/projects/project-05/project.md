---
title: Pollock splat simulation
index: 05
meta: Generative painting · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-05.png
preview: media/project-05-preview.png
embed: sketch/index.html
alt: Screenshot of the pollock splat simulation p5.js sketch
summary: Gesture-driven paint splatters in the spirit of Jackson Pollock.
---
Gesture-driven paint splatters in the spirit of Jackson Pollock.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-05/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/O9o2odalb).

```javascript
// Smooth Pollock Gesture Demo — p5.js 2+
// Tangent-matched curves + randomized gesture personalities.
// https://www.youtube.com/watch?v=8XFJtv6FavA


let backgroundColor = "#e8e0cf";

let palette = [
  "#171614",
  "#29251f",
  "#f0eadb",
  "#b9ae98",
  "#9b2922",
  "#c58b28",
  "#244a5a",
  "#68533b",
];

let colorIndex = 0;

// -----------------------------------------------------------------------------
// CURVE / PAINT PARAMETERS
// -----------------------------------------------------------------------------

let sampleSpacing = 7;
let tension = 1.0;

let maxLineWidth = 90;
let maxBlobSize = 24;
let sizeInfluence = 0.55;

let paintSize = 1;

// ---------------------------------------
```
