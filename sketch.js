var vehicles = []

var canv

var backgroundCol;

var followMouse = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  canv = createGraphics(width, height);
  
  backgroundCol = color(0);
  
  for(let i = 0; i < 200; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function draw() {
  background(backgroundCol);
  
  let steering = null
  for(let i = 0; i < vehicles.length; i++) {
    if(i != 0) {
      steering = vehicles[i].flee(vehicles[i-1].pos);
      vehicles[i].applyForce(steering);
    }
    
    if(i != vehicles.length-1) {
      steering = vehicles[i].pursue(vehicles[i+1]);
      vehicles[i].applyForce(steering);
    } else if(followMouse == true) {
      let mouse = createVector(mouseX, mouseY);
      steering = vehicles[i].seek(mouse);
      vehicles[i].applyForce(steering);
    }
    
    vehicles[i].edges();
    vehicles[i].update();
    vehicles[i].display(i);
  }
}

function mousePressed() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}

function keyPressed() {
  if(key == ' ') {
    followMouse = !followMouse;
  }
  
  if(key == 'r') {
    vehicles = [];
    for(let i = 0; i < 500; i++) {
      vehicles.push(new Vehicle(random(width), random(height)));
    }
  }
}
