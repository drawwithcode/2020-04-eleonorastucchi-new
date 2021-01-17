// let buttonEnter;
// let myText = "ENTER"
let data = "Enter password";
let myImage;
let inp;


function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  myImage = loadImage("./assets/images/myimage.png");

  //typerwriter text
  typeWriter(data, 0, windowWidth / 2, windowHeight / 2, 40);

  //input text pin
  let inp = createInput('');
  inp.input(myInputEvent);
  inp.position(windowWidth / 2, windowHeight / 2);

}

function draw() {
imageMode(CENTER);
image(myImage, windowWidth / 2, windowHeight / 2, myImage.width * 1.5, myImage.height * 1.5);
}

//enter to unlock
function keyPressed() {
  if (keyCode == ENTER) {
    window.open("index1.html", "_self");
  }

  function myInputEvent() {
  //console.log("typing", this.value());
}

//typewriter
function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    textFont("Arimo");
    textSize(20);
    fill("white");

    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}
}
