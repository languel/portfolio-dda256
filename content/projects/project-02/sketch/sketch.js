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

