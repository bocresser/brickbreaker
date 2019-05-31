function Snake() {
  this.body = [];
  this.len = 1;
  this.xdir = 1;
  this.ydir = 0;
  body.push(createVector(0, 0));



  this.setDir = function(xdir_, ydir_) {
    this.xdir = xdir_;
    this.ydir = ydir_;
  }



  this.update = function() {
    if (frameCount % 7 == 0) {
      var head = this.body[this.len - 1].copy();
      head.x += this.xdir * scl;
      head.y += this.ydir * scl;
      // gp.which.append(int(random(3)));
      this.body.splice(0, 1);
      this.body.push(head);
    }
  }



  this.display = function() {
    for (var i = 0; i < body.length; i++) {
      push();
      // //colorMode(HSB);
      // //tint(50, 255, 255);
      // image(politicians[gp.which.get(i)], body.get(i).x, body.get(i).y, 1, 1);
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, scl, scl);
      pop();
    }
  }



  this.edges = function() {
    var b = this.body[this.len - 1];
    if (b.x > width - floor(scl)) {
      b.x = 0;
    } else if (b.x < -(scl - floor(scl))) {
      b.x = width - scl;
    } else if (b.y > height - floor(scl)) {
      b.y = 0;
    } else if (b.y < -(scl - floor(scl))) {
      b.y = height - scl;
    }
  }
}