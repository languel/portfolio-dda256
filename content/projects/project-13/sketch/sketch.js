let fileName = "assets/birds.mp4";
let url = "https://upload.wikimedia.org/wikipedia/commons/1/15/Roundhay_Garden_Scene_%281888%29_7fps.webm";
let video1, video2;
let hasBackground = false;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // The bundled clip fills the frame even while the optional remote clip loads.
  video2 = await createVideo(fileName);
  video2.volume(0);
  video2.hide();
  video2.loop();
  try {
    video1 = await createVideo(url);
    video1.volume(0);
    video1.hide();
    video1.loop();
  } catch (error) {
    console.info("Using the bundled video while the remote clip is unavailable.");
  }
}

function draw() {
  imageMode(CORNER);
  if (video2?.elt.readyState >= 2) {
    if (!hasBackground) {
      image(video2, 0, 0, width, height);
      hasBackground = true;
    }
    image(video2, 0, height * 0.7, width * 0.3, height * 0.3);
  }
  if (video1?.elt.readyState >= 2) {
    image(video1, width * 0.7, height * 0.7, width * 0.3, height * 0.3);
  }
}

function mouseDragged() {
  const source = video1?.elt.readyState >= 2 ? video1 : video2;
  if (!source || source.elt.readyState < 2) return;
  imageMode(CENTER);
  const d = dist(mouseX, mouseY, pmouseX, pmouseY);
  image(source, mouseX, mouseY, d, d);
}
