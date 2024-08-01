// Ball properties
let ball = {
  x: 100,       // X position
  y: 100,       // Y position
  diameter: 50,  // Diameter
  xSpeed: 5,     // X velocity
  ySpeed: 3      // Y velocity
};

function setup() {
  createCanvas(600, 400);  // Create a canvas with width 600 and height 400
  noStroke();             // Disable the outline of shapes
}

function draw() {
  background(220);        // Clear the screen with a light gray background
  
  // Update ball position
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
  
  // Draw the ball
  fill(255, 0, 0);        // Set the ball color to red
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

  // Check for collision with the left or right edge
  if (ball.x < ball.diameter / 2 || ball.x > width - ball.diameter / 2) {
    ball.xSpeed *= -1;   // Reverse the horizontal direction
  }

  // Check for collision with the top or bottom edge
  if (ball.y < ball.diameter / 2 || ball.y > height - ball.diameter / 2) {
    ball.ySpeed *= -1;   // Reverse the vertical direction
  }
}