class STAR {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 200, 200, options);
      this.width = 200;
      this.height = 200;
      this.image=loadImage("MMMM.jpeg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("red");
      fill("red");
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };
  