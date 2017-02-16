var t1;
var t2;
var c1;
var c2;
var blocks=[];
var wall;
var p1;
var p2;
var p3;
function setup() {
  createCanvas(900,900);
  // frameRate(20);
  t1 = new Tron();
  t2 = new Tron();
  t3 = new Tron();
//  c1 =color (255,100,100);
  c1 =color (255,255,153);
  c2 =color (100,200,160);
  c3 =color (0,0,200);
  wall = new Wall();
	p1 =0;
	p2 =0;
	p3 =0;

  for(var i =0;i<30;i++){
    blocks.push(new Block());
    }
}
function resetGame(){
t1 = new Tron();
  t2 = new Tron();
  t3 = new Tron();
  blocks =[];
  for(var i =0;i<30;i++){
    blocks.push(new Block());
    }
  loop();
console.log("Deaths- Red : "+p1+" Green : "+p2+" Blue : "+p3);

}
function mousePressed(){
  // t1.total++;
  // t2.total++;
  resetGame();
}

function draw() {
  if(t1.total <10){
    t1.total++;
    t2.total++;
t3.total++;
  }

  // console.log(t1.xspeed);
  // console.log(t1.acc);

  background(51);

  t1.update();
  t1.show(c1);
  t2.update();
  t2.show(c2);
t3.update();
  t3.show(c3);

  if(t1.hits(t2)){
    t1.colorize(100);
	p1++;
    noLoop();
    console.log("Game Over! T2 Wins!");
  }
if(t1.hits(t3)){
    t1.colorize(100);
    noLoop();
	p1++;
    console.log("Game Over! T2 Wins!");
  }
if(t3.hits(t2)){
    t3.colorize(100);
    noLoop();
p3++;
    console.log("Game Over! T2 Wins!");
  }
if(t3.hits(t1)){
    t3.colorize(100);
    noLoop();
p3++;
    console.log("Game Over! T2 Wins!");
  }
  if(t2.hits(t1)){
    t2.colorize(100);
    noLoop();
p2++;    
console.log("Game Over! T1 Wins!");
  }
if(t2.hits(t3)){
    t2.colorize(100);
    noLoop();
p2++;
    console.log("Game Over! T1 Wins!");
  }
  for(var i =0; i<blocks.length;i++){
    blocks[i].show();
    if(blocks[i].hits(t1)){
      t1.colorize(100);
p1++;
      console.log("P1 Hit! GG");
      noLoop();
    }
    if(blocks[i].hits(t2)){
      t2.colorize(100);
p2++;
      console.log("P2 Hit! GG");
      noLoop();
    }
    if(blocks[i].hits(t3)){
      t3.colorize(100);
p3++;
      console.log("P2 Hit! GG");
     noLoop();
    }
  }
  if(wall.hit(t1)){
    t1.colorize(100);
    console.log("P1 Hit! GG");
    noLoop();
p1++;
  }
if(wall.hit(t3)){
    t3.colorize(100);
    console.log("P1 Hit! GG");
    noLoop();
p3++;
  }

  if(wall.hit(t2)){
    t2.colorize(100);
    console.log("P2 Hit! GG");
    noLoop();
p2++;
  }
    wall.show();
}
function keyReleased(){
  if(keyCode == 32){
    t1.normalize();
  }else if(keyCode == 69){
	t2.normalize();
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
  }else if(keyCode == 69){
    console.log("BOOST!");
    t2.boost();
  }
if(keyCode == 104){
    t3.dir(0,-1);
  }else if(keyCode == 101){
    t3.dir(0,1);
  }else if(keyCode == 102){
    t3.dir(1,0);
  }else if(keyCode == 100){
    t3.dir(-1,0);
  }else if(keyCode == 107){
    console.log("BOOST!");
    t3.boost();
  }
if(keyCode == 13){
resetGame();
}

}
