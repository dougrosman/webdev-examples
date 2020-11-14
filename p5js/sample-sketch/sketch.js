function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let size = 20;
let easing = 0.05;
let x = 1;
let y = 1;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("#sketch-parent")
  rectMode(CENTER);
  angleMode(DEGREES);
  
}

function draw() {
  background(160);
  
  let targetX = mouseX;
  let targetY = mouseY;
  
  
    push();
    translate(x, y);
    let a = atan2(mouseY - y, mouseX - x);
  
    let dx = targetX-x;
    x+=(dx*easing);
  
    let dy = targetY-y;
    y+=(dy*easing);
        
    
    rotate(a);
    push();
      rotate(90);
      triangle(-size, size, 0, -2*size, size, size);
    pop();
  pop();
}