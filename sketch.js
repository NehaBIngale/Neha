function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(7);
  noFill();

  // Seconds
  stroke(350, 120, 490);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  // Minutes
  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  // Hours
  stroke(100, 255, 150);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  // Drawing the hands
  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(100, 255, 150);
  line(0, 0, 50, 0);
  pop();

  // Center point
  stroke(0);
  point(0, 0);
}