let imgName = 'assets/seurat-ref.png';
let img;


async function setup() { // used to be preload() 
  createCanvas(windowWidth,windowHeight);
  //loads img asynchronously
  img = await loadImage(imgName);
  background('bisque');

  // image(img, 0,0, width,height);
}

function draw() {

}

function mouseDragged() {
  let brushSize = 30;
  imageMode(CENTER);
  brushSize = abs(mouseX-pmouseX) + abs(mouseY-pmouseY);
  image(img, mouseX,mouseY,brushSize,brushSize);
}
