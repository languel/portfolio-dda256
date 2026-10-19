// Keep drawing sketches fitted to the iframe without discarding their marks.
// Sketches with their own resize logic (image buffers, for example) override this.
if (typeof window.windowResized !== "function") {
  window.windowResized = function () {
    if (typeof width === "undefined" || !width || !height) return;
    const previous = get();
    resizeCanvas(windowWidth, windowHeight);
    push();
    resetMatrix();
    imageMode(CORNER);
    image(previous, 0, 0, width, height);
    pop();
  };
}
