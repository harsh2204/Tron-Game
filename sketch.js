var t1;
var t2;
var c1;
var c2;
var blocks=[];
function setup() {
  createCanvas(600,600);
  // frameRate(20);
  t1 = new Tron();
  t2 = new Tron();
  c1 =color (255,100,100);
  c2 =color (100,200,160);
  for(var i =0;i<5;i++){
    blocks.push(new Block());
    }
}

function mousePressed(){
  // t1.total++;
  // t2.total++;
  t1 = new Tron();
  t2 = new Tron();
  blocks =[];
  for(var i =0;i<5;i++){
    blocks.push(new Block());
    }
  loop();
}

function draw() {
  if(t1.total <10){
    t1.total++;
    t2.total++;
  }

  // console.log(t1.xspeed);
  // console.log(t1.acc);

  background(51);

  t1.update();
  t1.show(c1);
  t2.update();
  t2.show(c2);
  if(t1.hits(t2)){
    t1.colorize(100);
    noLoop();
    console.log("Game Over! T2 Wins!");
  }
  if(t2.hits(t1)){
    t2.colorize(100);
    noLoop();
    console.log("Game Over! T1 Wins!");
  }
  for(var i =0; i<blocks.length;i++){
    blocks[i].show();
    if(blocks[i].hits(t1)){
      t1.colorize(100);
      console.log("P1 Hit! GG");
      noLoop();
    }
    if(blocks[i].hits(t2)){
      t2.colorize(100);
      console.log("P2 Hit! GG");
      noLoop();
    }
  }
}
function keyReleased(){
  if(keyCode == 32){
    t1.normalize();
  }
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
  }else if(keyCode == 32){
    console.log("BOOST!");
    t1.boost();
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
