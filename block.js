function Block() {
    this.x = random(20, 880);
    this.y = random(20, 880);
    this.size = 5;


    this.show = function() {
        fill(255);
        rect(this.x, this.y, this.size, this.size);
        noFill()
        stroke('red');
        ellipse(this.x+this.size/2,this.y+this.size/2,this.size*2,this.size*2);
        noStroke();

    }
    this.hits = function(other) {
            var d = dist(this.x, this.y, other.x, other.y);
            if (d < this.size) {
                // console.log("Hit!");
                return true;
        }
    }

}
