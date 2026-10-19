let imgName = 'assets/Bvouniq.jpg';
let img,imgSrc;
let maskImg;
let maskBrushSize = 15;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  maskImg = createGraphics(width,height);
  maskImg.canvas.hidden = true;
  imgSrc = await loadImage(imgName); //sampled, ref
  img = createImage(width,height); //active temp image which always starts with ref
  
}

function mouseDragged() {
  maskImg.fill('white');
  maskImg.noStroke();
  maskBrushSize = dist(mouseX,mouseY,pmouseX,pmouseY);
  maskImg.circle(mouseX,mouseY,maskBrushSize);
}

function draw() {
  // background(220);
  background('black');
  //copy the whole src image into our tmp active image
  img.copy(imgSrc,
           0,0,imgSrc.width,imgSrc.height, 
           0,0,img.width,img.height);
  //apply the maskImg to the active img
  img.mask(maskImg);
  
  image(img,0,0,width,height);
  // image(maskImg,0,0,width,height);
}
function windowResized() {
  if (!maskImg) return;
  const previousMask = maskImg.get();
  resizeCanvas(windowWidth, windowHeight);
  maskImg.remove();
  maskImg = createGraphics(width, height);
  maskImg.canvas.hidden = true;
  maskImg.image(previousMask, 0, 0, width, height);
  img = createImage(width, height);
}
