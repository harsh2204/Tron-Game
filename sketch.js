var t1;
var t2;
var c1;
var c2;
function setup() {
  createCanvas(600,600);
  // frameRate(20);
  t1 = new Tron();
  t2 = new Tron();
  c1 =color (255,100,100);
  c2 =color (100,200,160);
}

function mousePressed(){
  // t1.total++;
  // t2.total++;

}

function draw() {
  if(t1.total <20){
    t1.total++;
    t2.total++;
  }
  if(t1.hits(t2)||t2.hits(t1)){
    noLoop();
    console.log("Game Over!");
  }
  background(51);
  t1.update();
  t1.show(c1);
  t2.update();
  t2.show(c2);
}
function keyPressed(){
// console.log(keyCode);
  if(keyCode == UP_ARROW){
    t1.dir(0,-1);
  }else if(keyCode == DOWN_ARROW){
    t1.dir(0,1);
  }else if(keyCode == RIGHT_ARROW){
    t1.dir(1,0);
  }else if(keyCode == LEFT_ARROW){
    t1.dir(-1,0);
  }
  if(keyCode == 87){
    t2.dir(0,-1);
  }else if(keyCode == 83){
    t2.dir(0,1);
  }else if(keyCode == 68){
    t2.dir(1,0);
  }else if(keyCode == 65){
    t2.dir(-1,0);
  }
}
