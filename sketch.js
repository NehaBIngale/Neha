function setup() {
  createCanvas(480, 500);
  background(320);
}

function draw() {
  // Check if the mouse is pressed
  if (mouseIsPressed) {
    // Draw a circle at the mouse position
    fill("blue"); // Blue color
    noStroke(); // No outline
    ellipse(mouseX, mouseY, 20, 20); // Circle with diameter 10
  }
}