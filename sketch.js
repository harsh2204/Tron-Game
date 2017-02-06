var t1;
var t2;
var c1;
var c2;

function setup() {
    createCanvas(600, 600);
    // frameRate(20);
    t1 = new Tron();
    t2 = new Tron();
    c1 = color(255, 100, 100);
    c2 = color(100, 200, 160);
}

function mousePressed() {
    // t1.total++;
    // t2.total++;

}

function draw() {
    background(51);
    if (t1.total < 20) {
        t1.total++;
        t2.total++;
    }
    // stroke(255);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // console.log("X: "+pmouseX+" Y: "+pmouseY);
    if (t1.hits(t2) || t2.hits(t1)) {
        noLoop();
        console.log("Game Over!");
    }
    t1.update();
    t1.show(c1);
    t2.update();
    t2.show(c2);

}

function touchEnded() {
  if ((pmouseX - touchX) > 0) {
      // console.log("Left");
      t1.dir(-1, 0);
  } else if ((pmouseX - touchX) < 0) {
      // console.log("Right");
      t1.dir(1, 0);
  } else if ((pmouseY - touchY) > 0) {
      // console.log("Up");
      t1.dir(0, -1);
  } else if ((pmouseY - touchY) < 0) {
      // console.log("Down");
      t1.dir(0, 1);
  }
}

function keyPressed() {
    // console.log(keyCode);
    if (keyCode == UP_ARROW) {
        t1.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        t1.dir(0, 1);
    } else if (keyCode == RIGHT_ARROW) {
        t1.dir(1, 0);
    } else if (keyCode == LEFT_ARROW) {
        t1.dir(-1, 0);
    }
    if (keyCode == 87) {
        t2.dir(0, -1);
    } else if (keyCode == 83) {
        t2.dir(0, 1);
    } else if (keyCode == 68) {
        t2.dir(1, 0);
    } else if (keyCode == 65) {
        t2.dir(-1, 0);
    }
}
