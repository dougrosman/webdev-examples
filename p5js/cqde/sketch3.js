let img;
let vid;


// runs once 
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("#sketch-parent");
  vid.loop();
}

// for media!
function preload() {
  img = loadImage("assets/bird8.jpg");
  vid = createVideo("assets/xray_1.2.mp4");
  vid.hide();
}


// runs about 60 frames per second
function draw() {
  background(0);
  
  push();
  noStroke();
  rotateX(radians(frameCount)/4);
  rotateY(radians(frameCount)/5);
  rotateZ(radians(frameCount)/6);
  texture(vid);
  let size = max(windowWidth, windowHeight)*2;
  let s = map(sin(frameCount/400), -1, 1, 100, size);
  scale(s);
  box(1);
  pop();
}

// need this function to make your sketch responsive!
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}