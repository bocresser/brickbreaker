function Tile(pos_, wid) {
  this.pos = pos_;
  //float speed = random(4, 6);
  this.speed = 4;
  this.twid = wid;
  this.radius = this.twid / 2;
  this.tileColor = color(0, 255, 255);
  this.shrink = false;
  this.whitch = int(random(3));
  // this.wait;
  // var hity = false;
  // var hitx = false;

  this.render = function() {
    push();
    // noStroke();
    // fill(tileColor);
    // ellipse(this.pos.x, this.pos.y, twid, twid);
    imageMode(CENTER);
    image(politicians[this.whitch], this.pos.x, this.pos.y, this.twid, this.twid);
    pop();
  }

  this.shrinkage = function() {
    if (this.shrink) {
      //  twid -= twid/10;
      //}
      //if (twid < 5 || twid < 5) {
      //  tiles.remove(t);
      //}
      //wait++;
      this.pos.y += this.speed;
    }
  }

  this.destroy = function(t) {
    if (this.pos.y > height+this.radius) {
      tiles.splice(t, 1);
    }
  }
}