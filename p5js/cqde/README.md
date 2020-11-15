

# Parts of P5 + using the P5 reference 
[p5.js reference](https://p5js.org/reference/)


## workshop schedule 
#### 2:00 - 2:30 shapes 
#### 2:30 - 3:00 textures 
#### 2:30 - 3:00 break
#### 3:15 - 3:45 animation 

✨✨✨✨✨✨✨✨✨✨✨✨✨

## Our Workshop Intensions
- An Activation of our text 
- a new logic of care within techno-collaborative spaces
- alternatives that establish new orientations of thinking, doing, making, and being 
  - working towards developing conversations on the mechanics and actions of coding situating it within a discourse on equity and its social implications


✨✨✨✨✨✨✨✨✨✨✨✨✨

## Intentions for those new to code or p5.js
- jump into the breakout room HALP at any point 

✨✨✨✨✨✨✨✨✨✨✨✨✨

## Intentions for those not new to code or p5.js
- 

✨✨✨✨✨✨✨✨✨✨✨✨✨

## Intentions for those who would like to spend more time in discourse

✨✨✨✨✨✨✨✨✨✨✨✨✨

### a note about copy and pasting code 
- you have to sculpt it! 

✨✨✨✨✨✨✨✨✨✨✨✨✨

🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿

### Basic Parts of P5.js
- setup(){}  --- runs once 
   - put statements that help you setup your sketch in here
   - canvas
      - the size of your *sketch*
      - createCanvas(windowWidth, windowHeight, WEBGL);
      - function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }
- draw(){}   --- repeats 
   - anything that changes, updates, or is part of your visauls should go in *draw()*


🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿

#### WEBGL (3D space) vs 2D space
- top left vs center 
  - x, y 
- orientations//cartesian space
  - x, y, Z

🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿

#### 3d primative statements and parameters
- plane()
  - plane([width], [height]);
<br>
<br>

- box()
  - box([width], [Height], [depth]);
<br>
<br>

- sphere() - surface is always fixed in relation to the center
  - sphere([radius]);
<br>
<br>

- ellipsoid() - control the distance from the center
  - ellipsoid([radiusx], [radiusy], [radiusz]);
<br>
<br>

- cylinder()
  - cylinder([radius], [height]);
<br>
<br>

- cone()
  - cone([radius], [height]);
<br>
<br>

- torus()
  - torus([radius], [tubeRadius]);
<br>
<br>

🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿

#### tweaking the primatives - changing values to shift outcomes of scale/shape/size
- plane()
  - plane([width], [height], [detailX], [detailY])
<br>
<br>

- box()
  - box([width], [Height], [depth], [detailX], [detailY])
<br>
<br>

- sphere()
  - sphere([radius], [detailX], [detailY])
<br>
<br>

-  ellipsoid()
  - ellipsoid([radiusx], [radiusy], [radiusz], [detailX], [detailY])
<br>
<br>

- cylinder()
  - cylinder([radius], [height], [detailX], [detailY], [bottomCap], [topCap]);
<br>
<br>

- cone()
  - cone([radius], [height], [detailX], [detailY], [cap])
<br>
<br>

- torus()
  - torus([radius], [tubeRadius], [detailX], [detailY])
<br>
<br>

🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻

# Activity 1

#### arrange a set of shapes on a canvas, between 2-4 so that they are distinctly placed in 3D space 

  - translate([x], [y]);

🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻

### materials

# fill and stroke 

- fill();  
  - RGB(RGB, [0-255], [0-255],[0-255]); 
  - hex ('#000000'); https://color.adobe.com/create/color-wheel
  - HSBA (HSB, [0-255], [0-255],[0-255], [maxA]);
- stroke();
- strokeWeight();

- noStroke();
- noFill();


### p5.js materials** 
- normalMaterial();
- specularMaterial([0-255]);
- ambientMaterial([0-255]);

#### order of operations 
push(); 
pop(); 


### Custom materails 



### media as texture
#### images as materails 
- in *global space*  create a var for image 
- in *preload()* update the var by loading your image into it *loadImage();*
- in *draw()* call your var into the *texture();* statement
- in *draw()*  call the texture BEFORE you call your shape statements! 

#### video as materails
- in *global space* create a var for the video
- in *preload()* update the var by loading your image into it *createVideo();*
- in *preload()* method chain [.] our video var to the hide(); statement  
- in *draw* BEFORE you call your shape statements 
- in *draw* call your var into the *texture();* statement



🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻

# Activity 2

#### try out the different fills and strokes on 1-2 shapes
#### try out the different p5.js materials on 1-2 shapes

🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻

#### animation 
### statements to make stuff moooove
- rotate();
  - rotateX();
  - rotateY();
  - rotateZ();
- translate([x],[y],[z]);
- scale([0-?]);


### p5.js variables and parameters that update
- radians
- frameCount
  - (radians(frameCount) * 2);
- mouseX
- mouseY 
- random();

### Repetition in movement 

- cos();
- sin(); 
- tan();

🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻

# Activity 3

#### make one shape rotate - x, y, z
#### make some shape translate along an x, y, or z 
#### mix a random in!
#### mix a noise in! 
#### mix in a cos(), sin(), tan()


🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻

### making your own updating vars! omg! 
- creating a variable that updates
- 


- declare a var for the given position you want to move 
- update the var 
  - +=
  - -=
- call the var as a parameter 
- replace the update with a constant var 
- use a conditional statement to *test* for the position of the var 
  -   if ([var] > windowWidth){
    [constant] = [reserve constant]; 
  }


### order of operations 
- will change how your animation renders out 
  - for x
    - translate BEFORE rotate will move the shape along the x access
    - translate AFTER rotate will move the shape AND animation from the center 


#### bonus round 

- for() loops
  - place a shape and repeat shapes around it! 
  
using p5.js text(); as a texture! https://editor.p5js.org/slow_izzm/sketches/ByOUeWVjX




