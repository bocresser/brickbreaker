 var boundary;

 var start = false;

 var paddle;
 var tiles = [];
 var ball;

 var delaytile = false;
 var countertile;

 var politicians = [];
 var Earth;

 var lives = 0;
 var wid;
 var restart = true;
 var win = false;
 var increment = 7;


 this.reset = function() {
   start = false;
   win = false;
   if (restart) {
     tiles.splice(0, tiles.length);
     for (var x = boundary.x + wid * 2 + 6; x <= width - boundary.x - wid * 2 + 6; x += wid + 3) {
       for (var y = boundary.y + wid * 2 + 6; y <= boundary.y + (wid * 4) + 3 * (4 + 1); y += wid + 3) {
         tiles.push(new Tile(createVector(x, y), wid));
       }
     }
     lives = 3;
     // increment = 7;
     paddle.pos = createVector(width / 2, height * 4 / 5);
     restart = false;
   }
   ball.pos = createVector(width / 2, height / 2)
   ball.angle = createVector(0, 1);
   // paddle.pos = createVector(width / 2, height * 4 / 5);
 }




 function setup() {
   createCanvas(windowWidth, windowHeight);

   for (var i = 0; i < 3; i++) {
     politicians.push(loadImage("Politician" + i + "T.png"));
   }
   Earth = loadImage("EarthT.png");

   boundary = createVector(0, 0);
   var bound = width * 5 / 7
   bound = constrain(bound, 0, 400);
   boundary.x = (width - bound) / 2; // 50
   boundary.y = height / 9; // 70
   wid = ((width - boundary.x * 2) - ((12 + 1) * 3)) / 12;
   paddle = new Paddle();
   ball = new Ball(createVector(width / 2, height / 2), createVector(0, 1), 7, wid);
   this.reset();
 }




 function draw() {
   background(252);

   var count = 0;
   for (var t = tiles.length - 1; t >= 0; t--) {
     if (tiles[t].shrink) {
       count++;
     }
   }
   if (count == tiles.length) {
     win = true;
     restart = true;
   }
   if (restart) {
     start = false;
   }

   push();
   noFill();
   stroke(210);
   strokeWeight(10);
   rect(boundary.x - 8, boundary.y - 8, width - boundary.x * 2 + 16, height);
   pop();

   countertile++;
   for (t = tiles.length - 1; t >= 0; t--) {
     tiles[t].render();
     if (start) {
       tiles[t].shrinkage();
     }
     tiles[t].destroy(t);
   }

   if (start) {
     ball.hitpaddle();
     ball.hittile();
     ball.hitwalls();
     ball.hitfloor();
     ball.update();
   }
   ball.render();

   paddle.hittile();
   paddle.update();
   paddle.render();

   push();
   fill(180);
   noStroke();
   for (var x = boundary.x + 25; x <= boundary.x + 25 + 24 * lives - 1; x += 24) {
     ellipse(x, boundary.y / 2, 14, 14);
   }
   pop();

   if (restart) {
     push();
     noStroke();
     colorMode(HSB);
     // if (tiles.length == 1 && tiles[0].shrink) {
     fill(120, 60, 100, 200);
     // } else {
     //   fill(300, 60, 100);
     // }
     rectMode(CENTER);
     rect(width / 2, height / 2, width - boundary.x, height / 6);
     textAlign(CENTER, CENTER);
     textSize(height / 9);
     fill(0);
     if (win) {
       text("WELL DONE", width / 2, height / 2);
     } else {
       text("TRY AGAIN", width / 2, height / 2);
     }
     pop();
   }
 }




 function keyPressed() {
   if (keyCode === RIGHT_ARROW) {
     paddle.speed = increment;
     // start = true;
   }
   if (keyCode === LEFT_ARROW) {
     paddle.speed = -increment;
     // start = true;
   }
   // if (key == "o") {
   //   increment += 1;
   // }
   // if (key == "i") {
   //   increment -= 1;
   // }
   if (key === ' ') {
     if (restart) {
       reset();
     } else {
       start = true;
     }
   }
 }

 function keyReleased() {
   if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
     paddle.speed = 0;
   }
 }

 // function mousePressed() {
 //   if (restart) {
 //     reset();
 //   } else {
 //     start = true;
 //   }

 //   if (mouseX > width * 4 / 7) {
 //     paddle.speed = 7;
 //   } else if (mouseX < width * 3 / 7) {
 //     paddle.speed = -7;
 //   }
 // }

 // function mouseReleased() {
 //   paddle.speed = 0;
 // }






 function windowResized() {
   resizeCanvas(windowWidth, windowHeight); // 550 700/ 500 600
   var bound = width * 5 / 7
   bound = constrain(bound, 0, 400);
   boundary.x = (width - bound) / 2; // 50
   boundary.y = height / 9; // 70
   var wid = ((width - boundary.x * 2) - ((12 + 1) * 3)) / 12;
   paddle.radius = wid * 1.7;
   lives = 0;
   this.reset();
 }