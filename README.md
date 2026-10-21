# DDA256 — p5.js class examples

Static portfolio of class sketches, based on [languel/portfolio-example](https://github.com/languel/portfolio-example).
Each project lives in `content/projects/project-NN/` with a `project.md`, a `media/` thumbnail, and the runnable sketch in `sketch/`.
Originals: [p5.js editor collection](https://editor.p5js.org/lborisso/collections/82rOA1jdy).

Run locally: `python3 -m http.server 8080`. Deploys to GitHub Pages on push to `main` (Settings → Pages → Source: GitHub Actions).


Detail views show a static preview first. Click the central play glyph or anywhere on the preview to replace it with the interactive canvas; the hover/focus close glyph, switching projects, or leaving the detail view stops it.

- `media:` in project front matter is the grid/rail thumbnail; `preview:` is the larger detail image (1600 × 1600 captures rendered at 2× density).
- Sketches use the iframe viewport (`windowWidth`, `windowHeight`) for canvas size. Shared `content/sketch.css` removes scrollbars; `content/sketch-runtime.js` preserves drawn marks during resize. Sketches with extra image buffers provide their own resize handler.

Detail notes and scrollable code align with the preview. `source:` points to the runnable JavaScript, displayed in full with a hover/focus copy button. On touch devices, copy and close controls remain visible.
