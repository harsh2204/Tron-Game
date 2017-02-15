function Wall() {

    this.show = function() {

        fill(214,142,255);
        noStroke();
        rect(0, 0, 600, 10);

        fill(214,142,255);
        noStroke();
        rect(0, 0, 10, 600);

        fill(214,142,255);
        noStroke();
        rect(0, 590, 600, 10);

        fill(214,142,255);
        noStroke();
        rect(590, 0, 10, 600);




    }
    this.hit = function (other){
      if(other.x >= 590 ){
          return true;
      }
      if(other.y >= 590){
          return true;
      }
      if(other.y <= 10){
          return true;
      }
      if(other.x <= 10){
          return true;
      }
}
}
