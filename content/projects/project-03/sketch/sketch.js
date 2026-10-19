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

  dot1 = new Particle();
  dot1.x = 200;
  dot1.y = 30;
  dot1.vx = 0.5;

  console.log(dot1);

  dot2 = new Particle(200,200,30,'darkgreen',3,3);
  console.log(dot2);
}

function draw() {
  background(bgColor);
  // console.log(dot1);
  dot1.update();
  dot1.draw();
  dot2.update();
  dot2.draw();
}
