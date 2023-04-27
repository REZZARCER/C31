class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
    
    // Define an array named trajectory
    this.trajectory = [];
  }
  
  shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
  console.log(frameCount)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

    if (this.body.velocity.x > 0 && this.body.position.x > 400) {
      var position = [this.body.position.x, this.body.position.y];
      // Add the current position of arrow to the trajectory array
      this.trajectory.push(position);
    }
    
  // Loop through trajectory array and display small dots at all the positions stored
    for (var i = 0; i < this.trajectory.length; i++) {
      fill("red");
      ellipse(this.trajectory[i][0], this.trajectory[i][1], 5, 5);  
         
      }

  }
  }

