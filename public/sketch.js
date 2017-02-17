var tron;
var col;
var blocks = [];
var wall;
var socket;
var tronlist = [];

function setup() {
    socket = io.connect('http://localhost:3000');
    createCanvas(600, 600);
    // frameRate(20);
    tron = new Tron(socket.id);
    tronlist.push(tron);
    col = color(random(0, 255), random(0, 255), random(0, 255));
    wall = new Wall();
    var data = {
        x: tron.x,
        y: tron.y,
        total: tron.total,
        col: col
    };
    socket.emit('Start', data);
    socket.on('beat',
        function(trons) {
            console.log("Data recieved: " + trons);
            for (var i = 0; i < trons.length; i++) {
                if (socket.id != trons[i].id) {
                      if(tronlist.length!=trons.length){
                        var tron = new Tron(trons[i].id);
                        tron.x = trons[i].x;
                        tron.y = trons[i].y;
                        tron.xspeed = trons[i].xspeed;
                        tron.yspeed = trons[i].yspeed;
                        tron.colour = trons[i].col;
                        tron.total = trons[i].total;
                        tronlist.push(tron);
                    }
                  }
                  }
            // console.log(trons);
        }
    );

}



function mousePressed() {
    // t1.total++;
    // t2.total++;
}

function draw() {

    // get total from server and set it to the tron total
    if (tron.total < 10) {
        tron.total++;
    }
    // console.log(t1.xspeed);
    // console.log(t1.acc);

    background(51);
    //Emit this updated tron


    //emit this tron
    //Setup code to draw the array of the trons
    for(var i = 0 ;i<tronlist.length;i++){
      tronlist[i].update();
      tronlist[i].show(tronlist[i].col);
    }

    //check and emit the hits by looping through the array of trons
    // if (t1.hits(t2)) {
    //     t1.colorize(100);
    //     noLoop();
    //     console.log("Game Over! T2 Wins!");
    // }
    // if (t2.hits(t1)) {
    //     t2.colorize(100);
    //     noLoop();
    //     console.log("Game Over! T1 Wins!");
    // }


    //Dont need to check the block hits
    // for (var i = 0; i < blocks.length; i++) {
    //     blocks[i].show();
    //     if (blocks[i].hits(t1)) {
    //         t1.colorize(100);
    //         console.log("P1 Hit! GG");
    //         noLoop();
    //     }
    //     if (blocks[i].hits(t2)) {
    //         t2.colorize(100);
    //         console.log("P2 Hit! GG");
    //         noLoop();
    //     }
    // }

    //Check for this hits wall
    if (wall.hit(tron)) {
        //then emit hit

        // t1.colorize(100);
        // console.log("P1 Hit! GG");
        // noLoop();
    }

    wall.show();

    var data = {
        x: tron.x,
        y: tron.y,
        xspeed: tron.xspeed,
        yspeed: tron.yspeed,
        total: tron.total,
        col: tron.col
    };
    // console.log("Sending Update: "+data.x);
    socket.emit('Update', data);

}

function keyReleased() {
    if (keyCode == 32) {
        tron.normalize();
    }
}

function keyPressed() {
    // console.log(keyCode);
    if (keyCode == UP_ARROW) {
        tron.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        tron.dir(0, 1);
    } else if (keyCode == RIGHT_ARROW) {
        tron.dir(1, 0);
    } else if (keyCode == LEFT_ARROW) {
        tron.dir(-1, 0);
    } else if (keyCode == 32) {
        console.log("BOOST!");
        tron.boost();
    }
    // if (keyCode == 87) {
    //     t2.dir(0, -1);
    // } else if (keyCode == 83) {
    //     t2.dir(0, 1);
    // } else if (keyCode == 68) {
    //     t2.dir(1, 0);
    // } else if (keyCode == 65) {
    //     t2.dir(-1, 0);
    // }
}
