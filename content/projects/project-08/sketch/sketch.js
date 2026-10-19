let imgFile = "assets/seurat-ref.png";
let img;

async function setup() {
  createCanvas(600, 600);
  background('bisque');
  img = await loadImage(imgFile);
  image(img,0,0,width,height);
}
 
async function drawRandomDaub() {
  //canvas coords
  // draw in a chosen area
  // let canvas_x = random(0.25*width, 0.50*width);
  // let canvas_y = random(0.40*height, 0.80*height);

  let canvas_x = random(0.0*width, 1.0*width);
  let canvas_y = random(0.0*height, 1.0*height);


  // uncomment this to get whole image
  let image_x = img.width*(canvas_x/width);
  let image_y = img.height*(canvas_y/height);
  // let image_x = map(canvas_x, 
  //                   0.25*width, 0.50*width,  
  //                   0.4*img.width, 0.6*img.width);
  // let image_y = map(canvas_y, 
  //                   0.40*height, 0.80*height, 
  //                   0.15*img.height, 0.5*img.height);

  let sample_color = img.get(image_x, image_y);

  let sample_radius = (mouseX / width) * 50;
  
  fill(sample_color);
  noStroke(); //daub nib
   ellipseMode(CENTER);
  circle(canvas_x, canvas_y, sample_radius);

  //what is the color at x,y
}

function draw() {

  console.log((mouseX/width).toFixed(2));
  for (let i = 0; i < 100; i++) {
    drawRandomDaub();
  }
  imageMode(CORNER);
  image(img, 0.8*width,0.8*height, 0.2*width, 0.2*height);
}
