let fileName = "assets/birds.mp4";
let url = "https://upload.wikimedia.org/wikipedia/commons/1/15/Roundhay_Garden_Scene_%281888%29_7fps.webm?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";

let video1,video2;

async function setup() {
  createCanvas(400, 400);
  video1 = await createVideo(url);
  video1.loop();
  video1.hide();

  video2 = await createVideo(fileName);
  video2.loop();
  video2.hide();
}

function draw() {
  // background(220);
  imageMode(CORNER);
  image(video2, 0, height/2, width/2, height/2);
   image(video1, width/2, height/2, width/2, height/2);
}

function mouseDragged() {
  imageMode(CENTER);
  let d = dist(mouseX,mouseY,pmouseX,pmouseY); image(video1,mouseX,mouseY,d,d);

}
