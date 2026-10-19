let poem = "what a piece of work is ...";

let currentChar = 0;
let bgColor = "antiquewhite";
let lastCharX = 0;
let lastCharY = 0;
let minCharDist = 12;

let scriptFont =  "Caveat";
let dotFont="Monospace";

let imgName='';
let img;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
  
   dotFont = await loadFont("assets/DOTMATRI.TTF");
  textFont(dotFont);
  
}

function draw() {
  
}


function mouseDragged() {
  let d = dist(mouseX, mouseY, lastCharX, lastCharY);
  if (d > minCharDist) {
    
    textSize(max(d,minCharDist));
    text(poem.charAt(currentChar), mouseX, mouseY);
    currentChar = (currentChar + 1) % poem.length;
    lastCharX = mouseX;
    lastCharY = mouseY;
  }
}

function keyPressed() {
  if (key === " ") {
    background(bgColor);
  }
  if (key === ".") {
    textFont(dotFont);
  }

  if (key === ",") {
    textFont(scriptFont);
  }
}
