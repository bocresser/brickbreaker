function Paddle() {
   this.pos = createVector(width / 2, height * 4 / 5);
   this.rotation = 0;
   this.radius = 60;
   this.speed = 0;
   // var vel = createVector();
   // var moving = false;

   //draw a elli pse
   this.render = function() {
     push();
     translate(this.pos.x, this.pos.y);
     rotate(radians(this.rotation));
     // fill(255, 0, 255);
     // noStroke();
     // ellipse(0, 0, this.radius * 2, this.radius * 2);
     imageMode(CENTER);
     image(Earth, 0, 0, this.radius * 2, this.radius * 2);
     pop();
   }


   this.hittile = function() {
     for (var t = tiles.length - 1; t >= 0; t--) {
       if (dist(this.pos.x, this.pos.y, tiles[t].pos.x, tiles[t].pos.y) < this.radius + tiles[t].twid / 2) {
         for (var t2 = tiles.length - 1; t2 >= 0; t2--) {
           if (tiles[t2].shrink == true) {
             tiles.splice(t2, 1);
           }
         }
         // tiles.splice(t, 1);
         lives--;
         if (lives == 0) {
           restart = true;
         } else {
           reset();
         }
       }
     }
   }

   this.update = function() {
     this.pos.x += this.speed;
     this.pos.x = constrain(this.pos.x, boundary.x - this.radius * 3 / 5, width - boundary.x + this.radius * 3 / 5);
     // rotation += speed;
     this.rotation = ((this.pos.x - width / 2) * PI) / 4;
     // vel.x = speed;
     // vel.y = 0;
   }
 }