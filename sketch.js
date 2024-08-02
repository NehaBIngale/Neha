function setup() {
  createCanvas(400, 500);
  background(320,250,180);
}

function draw() {
  // Check if the mouse is pressed
  if (mouseIsPressed) {
    // Draw a circle at the mouse position
    fill("blue"); // blue color
    noStroke(); // No outline
    ellipse(mouseX, mouseY, 20, 20); // Circle with diameter 20
  }
}