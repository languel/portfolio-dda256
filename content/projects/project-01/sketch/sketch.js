let bgColor = "black";
let fgColor1 = "gold";
let fgColor2 = "pink";

setup = () => { //modern ES6 js syntax
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
};

function mouseDragged() {
  // dist(x1,y1,x2,y2) is distance between two point
  let brushSize = dist(pmouseX, pmouseY, mouseX, mouseY); 
  stroke(fgColor1);
  noFill();
  
  // ellipse(mouseX, mouseY, 10);
  // rect(mouseX,mouseY,brushSize);
  rectMode(CORNER)
  // rect(mouseX,mouseY,abs(pmouseX-mouseX),abs(pmouseY-mouseY))
  stroke(fgColor2);

  line(pmouseX, pmouseY, mouseX, mouseY);
  stroke('aquamarine');
  line(mouseX,mouseY,
       mouseX + (pmouseY-mouseY) ,
       mouseY - (pmouseX-mouseX));

  stroke('teal');
  line(mouseX,mouseY,
       mouseX - (pmouseY-mouseY) ,
       mouseY + (pmouseX-mouseX));
  
}
