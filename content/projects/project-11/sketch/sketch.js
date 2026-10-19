let imgName = 'assets/Bvouniq.jpg';
let img,imgSrc;
let maskImg;
let maskBrushSize = 15;

async function setup() {
  createCanvas(500, 700);
  maskImg = createGraphics(width,height);
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