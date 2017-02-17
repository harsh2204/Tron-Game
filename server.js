var express = require('express');
var app = express();

var trons = [];
var blocks=[];
function Tron(id, x, y,total, col) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.total = total;
    this.col = col;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function Block(){
  this.x = getRandomArbitrary(20, 480);
  this.y = getRandomArbitrary(20, 480);
}
var server = app.listen(3000);

app.use(express.static('public'));

console.log("SERVER UP!");

var socket = require('socket.io');

var io = socket(server);


io.sockets.on('connection', newConnection);


for(var i =0;i<15;i++){
  blocks.push(new Block());
}

function newConnection(socket) {
  // setInterval(beat, 1000);
  // function beat(){
  // }
    console.log("A new connection has been established with: " + socket.id);
    socket.on('Start', tron);
    function tron(data) {
        var tron = new Tron(socket.id, data.x, data.y,data.total,data.col);
        trons.push(tron);
        console.log(tron);
    }
    socket.on('Update', update);
    function update(data){
      // console.log(data);
      for(var i = 0; i<trons.length;i++){
        if(socket.id = trons[i].id){
          // console.log("Tron Found!");
          trons[i].x = data.x;
          trons[i].y = data.y;
          trons[i].xspeed = data.xspeed;
          trons[i].yspeed = data.yspeed;
          // console.log("Tron "+i+" "+trons[i]);
        }
      }
      io.sockets.emit('beat', trons);
    }
}
