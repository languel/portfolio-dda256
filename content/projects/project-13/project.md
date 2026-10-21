---
title: Working with video
index: 13
meta: Video · 2026
medium: p5.js
year: 2026
series: FA26 DDA256
media: media/project-13.png
preview: media/project-13-preview.png
embed: sketch/index.html
source: sketch/sketch.js
alt: Birds in flight at sunset, a frame from the video used in the sketch
summary: Load and manipulate video frames in p5.js.
---
Load and manipulate video frames in p5.js.

Click inside the sketch to interact with it. The full source is in the repository under `content/projects/project-13/sketch/`, and the original lives in the [p5.js web editor](https://editor.p5js.org/lborisso/sketches/ziR5fZruK).

```javascript
let fileName = "assets/birds.mp4";
let url = "https://upload.wikimedia.org/wikipedia/commons/1/15/Roundhay_Garden_Scene_%281888%29_7fps.webm?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";

let video1,video2;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  video1 = await createVideo(url);
  video1.loop();
  video1.hide();

  video2 = await createVideo(fileName);
  video2.loop();
  video2.hide();
}

function draw() {
  // background(220);
  imageMode(CORNER);
  image(video2, 0, height/2, width/2, height/2);
   image(video1, width/2, height/2, width/2, height/2);
}

function mouseDragged() {
  imageMode(CENTER);
  let d = dist(mouseX,mouseY,pmouseX,pmouseY); im
```
