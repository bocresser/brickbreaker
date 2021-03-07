// ICM-2016

// Take a look at the HTML file where some things have been
// added for mobile viewing

function setup() {
  // Make the canvas the size of the mobile device screen
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function touchMoved() {
  strokeWeight(10);
  console.log(mouseX);
  stroke(0,255,0);
  // For single touch mouseX and mouseY work just fine
  line(mouseX, mouseY, pmouseX, pmouseY);

  // This prevents dragging screen around
  return false;
}
