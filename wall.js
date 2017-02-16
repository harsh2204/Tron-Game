function Wall() {

    this.show = function() {
        fill(214, 142, 255);
        noStroke();
        rect(0, 0, 900, 10);
        rect(0, 0, 10,900);
        rect(0, 890, 900, 10);
        rect(890, 0, 10, 900);
    }
    this.hit = function(other) {
        if (other.x >= 890) {
            return true;
        }
        if (other.y >= 890) {
            return true;
        }
        if (other.y <= 10) {
            return true;
        }
        if (other.x <= 10) {
            return true;
        }
    }
}
