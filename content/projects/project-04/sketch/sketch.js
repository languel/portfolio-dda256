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
    if (this.x < 0) this.x = width;
    // % width;
    this.y = this.y + this.vy;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
    // % height;
  }
}

//////////////////////////

// things that need to persist for the world
let bgColor = "antiquewhite";

let particles = []; //store the particle array

// let palette  = ['maroon','pink','yellow','darkgoldenrod','plum','sienna','lightyellow'];

let palette = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

function setup() {
  // createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  background(bgColor);

  for (let i = 0; i < N_PARTICLES; i++) {
    // let c = random(palette);
    let c = palette[i % palette.length];
    let x = random(width);
    let y = random(height);
    let r = 30;
    let p = new Particle(x, y, r, c); //actual creation

    p.vx = random(-2, 2);
    p.vy = random(-0.5, 0.5);
    // p.shape = random( ['rect','circle']);

    particles.push(p); // world ledger
  }
  console.log(particles);
}

function interaction(a, b) {
  let d = dist(a.x, a.y, b.x, b.y);
  if (d < 0.1 * width) {
    //check dist between two parts
    // smooth();
    stroke(a.c);
    line(a.x, a.y, b.x, b.y);
  }

  if (d < a.r + b.r) {
    //overlap
    if (b.r > a.r) {
      b.r = b.r + 0.1;
      a.r = a.r - 0.1;
    } else {
      b.r = b.r - 0.1;
      a.r = a.r + 0.1;
      a.vx =0;
      a.vy=0;
    }
    b.r = min(b.r,int_threshold);
    a.r = min(a.r,int_threshold);
  }
}

function updateAndDrawParticles() {
  for (let p of particles) {
    //iterate over
    p.update();
    // noSmooth();
    p.draw();
  }

  // iterate over all pairs and have them interact
  for (let i = 0; i < particles.length - 1; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      // particles[i].interact(particles[j]);
      interaction(particles[i], particles[j]);
    }
  }
}

/////////////

function draw() {
  background(bgColor);
  updateAndDrawParticles();
  // console.log(dot1);
}
//////////////

function mousePressed() {
  let r = 30;
  let c = "black";
  activeParticle = new Particle(mouseX, mouseY, r, c);
  // particles.push(p);
}

function mouseReleased() {
  //compute direction of movement
  let vx = (mouseX - activeParticle.x) * 0.1;
  let vy = (mouseY - activeParticle.y) * 0.1;
  activeParticle.vx = vx;
  activeParticle.vy = vy;
  particles.push(activeParticle);
}
