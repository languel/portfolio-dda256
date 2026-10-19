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
    this.points.push(p);
  }

  draw() {
    for (let i = 0; i < this.points.length; i++) {
      circle(this.points[i].x, this.points[i].y, this.r);
    }

    for (let i = 0; i < this.points.length - 1; i++) {
      stroke(this.c);
      line(
        this.points[i].x,
        this.points[i].y,
        this.points[i + 1].x,
        this.points[i + 1].y
      );
    }
  }

  update() {}
}

////////
