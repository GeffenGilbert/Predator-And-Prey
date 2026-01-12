class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    
    this.maxSpeed = 5;
    this.maxForce = 2;
    
    this.r = 16;
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  
  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    
    return force;
  }
  
  flee(target) {
    return this.seek(target).mult(-1);
  }
  
  pursue(vehicle) {
    let target = vehicle.pos.copy();
    let velocity = vehicle.vel.copy();
    
    let distance = p5.Vector.dist(this.pos, vehicle.pos);
    let speed = this.vel.mag();
    
    let C = 0.5;
    if(speed == 0) {
      velocity.mult(0);
    } else {
      velocity.mult(distance/speed * C);
    }
    target.add(velocity);
    
    return this.seek(target);
  }
  
  evade(vehicle) {
    return this.pursue(vehicle).mult(-1);
  }
  
  done() {
    return (
      this.pos.x < -this.r || 
      this.pos.x > width + this.r || 
      this.pos.y < -this.r || 
      this.pos.y > height + this.r
    );
  }
  
  edges() {
    if(this.pos.x < -this.r) {
      this.pos.x = width+this.r;
    }
    if(this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    
    if(this.pos.y < -this.r) {
      this.pos.y = height+this.r;
    }
    if(this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    
    this.acc.set(0, 0);
  }
  
  display(i) {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    
    let t = i / vehicles.length;
    let tempT = 0;
    
    let c1 = color(65, 105, 225);
    let c2 = color(135, 206, 250);
    let c3 = color(176, 196, 222);
    let c4 = color(255);
    
    let col = backgroundCol;
    if(t < 0.2) {
      tempT = t * 5;
      col = lerpColor(backgroundCol, c1, tempT);
    } else if(t < 0.5) {
      tempT = (t - 0.2) * (10 / 3);
      col = lerpColor(c1, c2, tempT);
    } else if(t < 0.8) {
      tempT = (t - 0.5) * (10 / 3);
      col = lerpColor(c2, c3, tempT);
    } else {
      tempT = (t - 0.8) * 5;
      col = lerpColor(c3, c4, tempT);
    }
    
    strokeWeight(1);
    col.setAlpha(255);
    stroke(col);
    col.setAlpha(100);
    fill(col);
    triangle(-this.r, -this.r/2, -this.r, this.r/2, this.r, 0);
    pop();
    
    canv.strokeWeight(2);
    canv.stroke(col);
    canv.point(this.pos.x, this.pos.y);
  }
}
