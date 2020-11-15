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
  vid = createVideo("assets/cat_walk_4.mp4");
  vid.hide();
}


// runs about 60 frames per second
function draw() {
  // background(205, 105, 9);
  
  push();
  noStroke();
  rotateX(radians(frameCount)/2.3);
  rotateY(radians(frameCount)/2.2);
  rotateZ(radians(frameCount)/2.1);
  texture(vid);
  box(1500, 1500);
}

// need this function to make your sketch responsive!
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}