var dot;

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(255,255,255);  

 if(mouseDown(LEFT)){
    dot = createSprite(mouseX,mouseY,5,5);
  }

  drawSprites();
}