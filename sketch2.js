let paint;

function preload(){
paint = loadImage("./assets/images/paint.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("white");

//buttonIcon
// push();
// buttonIcon = createButton("Create your background image");
// buttonIcon.position(windowWidth / 2 - buttonIcon.width / 2, windowHeight / 1.7 - buttonIcon.height / 2);
// buttonIcon.mousePressed();
// pop();
}

function draw() {
imageMode(CENTER);
image(paint, windowWidth / 2, windowHeight / 2, paint.width / 1.5, paint.height / 1.75);
}
