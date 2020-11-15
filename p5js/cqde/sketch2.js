let img;
let vid;
let value;


// runs once 
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("#sketch-parent");
  vid.loop();
  angleMode(DEGREES);
  colorMode(HSB, 255);

  value = width/80;
}

// for media!
function preload() {
  img = loadImage("assets/bird8.jpg");
  vid = createVideo("assets/cat_walk_4.mp4");
  vid.hide();
}


// runs about 60 frames per second
function draw() {
  background(205, 105, 9);

  orbitControl();
  push();
    // rotateX(radians(frameCount)*2);
    // rotateY(radians(frameCount)*10);
    // rotateZ(radians(frameCount)*2);
    rotateX(45);
    rotateY(-45);
    rotateZ(45);

  for(let y = height/4; y < 3*height/4; y+=value) {
    for(let x = width/4; x < 3*width/4; x+=value) {
      
      push();
        translate(width/2 - x, height/2 - y, sin(((mouseX/50)*frameCount+x+y))*value*2);
        //texture(vid);
        //let h = map(sin((frameCount+x+y))*value, -value, value, 0, 255);

        let h = map(x*y, (height/4)*(width/4), (3*height/4)*(3*width/4), 0, 255);
        fill(h, 255, 255);
        box(value, value);
      pop();
    }
  }

  pop();
  
  // push();
  //   noStroke();
  //   rotateX(radians(frameCount)/2.3);
  //   rotateY(radians(frameCount)/2.2);
  //   rotateZ(radians(frameCount)/2.1);
  //   texture(vid);
  //   box(1500, 1500);
  // pop();
}

// need this function to make your sketch responsive!
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}