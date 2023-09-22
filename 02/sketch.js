const amount = 5;
let speed = 2;

let rectX = []
let rectY = [];

let circlesX = [];
let circlesY = [];

let beeImg = null;
let splashImg = null;
let vmImg = null;
let backgroundImg = null;

function preload()
{
  beeImg = loadImage('assets/bee.png');
  splashImg = loadImage('assets/splash.png');
  vmImg = loadImage('assets/vliegenmepper.png');
  backgroundImg = loadImage('assets/background.png');
}

function setup() {
  createCanvas(400, 400);
  
  image(backgroundImg, 0, 0, 400, 400);

  for(let i = 0; i < amount; i++)
  {
    rectX[i] = random(20, 380);
    rectY[i] = random(20, 380);
  }
}

function draw() 
{
  imageMode(CORNERS);
  background(230);
  image(backgroundImg, 0, 0, 400, 400);

  imageMode(CENTER);

  for(let i = 0; i < circlesX.length; i++)
  {
    image(splashImg, circlesX[i], circlesY[i], 80, 80);
  }

  fill(255);
  randomRect();

  image(vmImg, mouseX, mouseY + 30, 110, 110);
}

function mousePressed() 
{
  for(let i = 0; i < rectX.length; i++)
  {
    if(mouseX > rectX[i] - 20 && mouseX < rectX[i] + 20 && mouseY > rectY[i] - 20 && mouseY < rectY[i] + 20)
    {
      rectX[i] = random(380);
      rectY[i] = random(380);

      circlesX[circlesX.length] = mouseX;
      circlesY[circlesY.length] = mouseY;
    }
  }
}

function randomRect()
{
  for(let i = 0; i < rectX.length; i++)
  {
    image(beeImg, rectX[i], rectY[i], 80, 80);
  }
}