var fieldImg,field;
var blueCarImg,blueCar;
var redCarImg,redCar;
var ballImg,ball;
var redGoalImg;
var blueGoalImg;

function preload() {
fieldImg = loadImage("images/background.jpg");
blueCarImg = loadImage("images/blue team car.png");
redCarImg = loadImage("images/CutPastePhotos-1588684250190.png");
ballImg = loadImage("images/football.png");
}
function setup() {
  createCanvas(1200,600);
  redCar = createSprite(200,300,60,60);
  blueCar = createSprite(1000, 300, 60, 60);
  ball = createSprite(600,300,50,50);
  redCar.addImage("redCar",redCarImg);
  blueCar.addImage("blueCar",blueCarImg);
  ball.addImage("ball",ballImg);
  redCar.scale = 0.15;
  blueCar.scale = 0.085;
  ball.scale = 0.5;
}

function draw() {
  background(fieldImg); 
  
  
  drawSprites();
}