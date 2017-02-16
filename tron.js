function Tron() {
    this.x = random(100, 500);
    this.y = random(100, 500);
    this.scl = 5;
    this.xspeed = 0;
    this.yspeed = 0;
    this.acc = 0;

    this.total = 0;
    this.tail = [];
    this.col = [];


    this.update = function() {
        if (this.total == this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        if (this.xspeed > 0) {
            this.xspeed += this.acc / this.scl;
        } else if (this.xspeed < 0) {
            this.xspeed -= this.acc / this.scl;
        }
        if (this.yspeed > 0) {
            this.yspeed += this.acc / this.scl;
        } else if (this.yspeed < 0) {
            this.yspeed -= this.acc / this.scl;
        }
        this.x += this.xspeed * this.scl;
        this.y += this.yspeed * this.scl;
        this.x = constrain(this.x, 0, width - this.scl);
        this.y = constrain(this.y, 0, height - this.scl);
        this.acc *= 0;
        // console.log(this.xspeed);

    }
    this.normalize = function(){
      if(this.xspeed > 0){
        this.xspeed = 1;
      }
      if(this.xspeed < 0){
        this.xspeed = -1;
      }
      if(this.yspeed > 0){
        this.yspeed = 1;
      }
      if(this.yspeed < 0){
        this.yspeed = -1;
      }
    }

    this.boost = function() {
        this.acc = 2;
    }

    this.colorize = function(color) {

        for (var i = this.tail.length - 1; i >= 0; i--) {
            fill(color);
            rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
        }
        ellipse(this.x + (this.scl / 2), this.y + (this.scl / 2), this.scl, this.scl)
    }

    this.show = function(c) {
        noStroke();
        this.col = c.levels;
        this.col[3] = 255;
        // fill(c);s
        for (var i = this.tail.length - 1; i >= 0; i--) {
            this.col[3] *= 0.9;
            fill(this.col[0], this.col[1], this.col[2], this.col[3]);
            rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
        }
        fill(this.col[0], this.col[1], this.col[2], 255);
        // rect(this.x, this.y, this.scl, this.scl)
        ellipse(this.x + (this.scl / 2), this.y + (this.scl / 2), this.scl, this.scl)
if(this.xspeed == 0 && this.yspeed ==0){
noFill();
stroke(this.col[0],this.col[1],this.col[2], 255);
ellipse(this.x + (this.scl / 2), this.y + (this.scl / 2), this.scl*5, this.scl*5)
}
    }
    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    this.hits = function(other) {
        for (i = 0; i < other.tail.length; i++) {
            var d = dist(this.x, this.y, other.tail[i].x, other.tail[i].y);
            if (d < this.scl) {
                console.log("Hit!");
                return true;
            }
        }
    }
}
