var fixrect , movingrect;

function setup() {
  createCanvas(1200,400);
 fixrect =  createSprite(200, 200, 50, 70);
 movingrect = createSprite(400,200.70,50);
fixrect.shapecolor = "green";
movingrect.shapecolor = "green";
}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
 
 console.log(movingrect.x - fixrect.x);
  drawSprites();
}