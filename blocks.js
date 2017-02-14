function Block() {
    this.x = random(0, 600);
    this.y = random(0, 600);
    this.size = 10;
    this.show = function() {
        fill(255);
        rect(this.x, this.y, this.size, this.size);
    }
}
