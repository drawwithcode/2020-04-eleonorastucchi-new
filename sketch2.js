let paint;
let myCanvas;
let myButton;
let hSlide, sSlide, bSlide;
let h, s, b;

function preload(){
paint = loadImage("./assets/images/paint.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCanvas = createGraphics(windowWidth, windowHeight);

  colorMode(HSB);
      // create the sliders
      hSlide = createSlider(0, 360, 180); // low val, high val, default
      sSlide = createSlider(0, 100, 50);
      bSlide = createSlider(0, 100, 50);

      // position the sliders
      hSlide.position(windowWidth / 150, windowHeight * 2.5 / 20);
      sSlide.position(windowWidth / 150, windowHeight * 4 / 20);
      bSlide.position(windowWidth / 150, windowHeight * 5.5 / 20);

      // variables to hold the color
      h = 180;
      s = 50;
      b = 50;

  push();
  myButton = createButton("Save");
  myButton.position(windowWidth/21-myButton.width/2, windowHeight*8/9-myButton.height/2);
  myButton.mousePressed(myCanvas.save);
  pop();
}

function draw() {
  imageMode(CENTER);
  image(paint, windowWidth / 2, windowHeight / 2, paint.width / 1.5, paint.height / 1.75);
myCanvas.background(h, s, b);

    // position text
    push();
    textAlign(LEFT, TOP);
    textFont("Arimo");
    textSize(15);
    stroke("black")
    strokeWeight(0.7);
    fill("black");
    text('Hue: ' + hSlide.value(), windowWidth / 150, windowHeight * 3 / 20);
    text('Saturation: '+ sSlide.value(), windowWidth / 150, windowHeight * 4.5 / 20);
    text('Brightness: '+ bSlide.value(), windowWidth / 150, windowHeight * 6 / 20);
    pop();

    // read the value of the slider and store it in a variable
    h = hSlide.value();
    s = sSlide.value();
    b = bSlide.value();

}

function myButtonPress(){
 myCanvas.save("NewScreensaver.jpg");
}
