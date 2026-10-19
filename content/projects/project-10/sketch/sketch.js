let imgFile = "assets/andre_breton.jpeg";
let img; //place in mem

async function setup() {
  createCanvas(windowWidth, windowHeight);
  img = await loadImage(imgFile);
  reloadImage();
}

async function reloadImage() {
  img = await loadImage(imgFile);
  img.resize(width, height);
  image(img,0,0,width,height);
}

function windowResized() {
  //event when window is resize
  resizeCanvas(windowWidth,windowHeight);
  reloadImage();

  console.log(
    "w h:" + width + " " + height + "|" + windowWidth + " " + windowHeight
  );
}

function draw() {
  //image(img,0,0,width, height);
  
  let x1 = round(random(width));
  let y1 = round(random(height));
  let w1 = round(random(0.1,0.5*width));
  let h1 = round(random(0.1,0.5*height));

  let x2 = round(random(width));
  let y2 = round(random(height));
  let w2 = round(0.25*w1);
  let h2 = round(0.25*h1);
  
  copy(img, x1,y1,w1,h1, x2,y2,w2,h2);
  
}
