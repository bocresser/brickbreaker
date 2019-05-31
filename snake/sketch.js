var snake;
var timer = 0;

// var size;
var scl = 20;

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   size = height * 6 / 7;
// }

function setup() {
  createCanvas(400, 400);
  // createCanvas(windowWidth, windowHeight);
  // size = height * 6 / 7;
  snake = new Snake();
}





function draw() {
  translate((width - size) / 2, (height - size) / 2);
  background(245);

  scl = width / 13;

  timer++;
  snake.update();
  snake.edges();
  snake.display();

  // for (var x = 0; x < width; x += scl) {
  //   stroke(255, 0, 0);
  //   fill(0);
  //   rect(x, 0, scl, scl);
  // }

  // scl = floor(scl);
}





function keyPressed() {
  // if (timer >= 8) {
  if (keyCode === UP_ARROW) {
    if (snake.ydir != 1) {
      console.log("yes");
      snake.setDir(0, -1);
      timer = 0;
    }
  } else if (keyCode === DOWN_ARROW) {
    if (snake.ydir != -1) {
      snake.setDir(0, 1);
      timer = 0;
    }
  } else if (keyCode === LEFT_ARROW) {
    if (snake.xdir != 1) {
      snake.setDir(-1, 0);
      timer = 0;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (snake.xdir != -1) {
      snake.setDir(1, 0);
      timer = 0;
    }
  }
  // }
}
