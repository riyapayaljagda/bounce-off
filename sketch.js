var fixed, moving;
function setup() {
  createCanvas(800, 400);
  fixed = createSprite(200, 100, 50, 50);
  fixed.shapeColor = "red";
  moving = createSprite(400, 100, 50, 50);
  moving.shapeColor = "red"

  fixed.velocityX = 4;
  moving.velocityX = -4;
}

function draw() {
  background(0);

  //moving.x=World.mouseX;
  //moving.y=World.mouseY
  if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
    fixed.x - moving.x < moving.width / 2 + fixed.width / 2) {
    //&& moving.y-fixed.y<fixed.height/2+moving.height/2 &&
    //fixed.y-moving.y<moving.height/2+fixed.height/2){
    // fixed.shapeColor="green"
    // moving.shapeColor="green"
    fixed.velocityX = fixed.velocityX * (-1);
    moving.velocityX = moving.velocityX * (-1);
  }
  // }else{
  //   fixed.shapeColor="red"
  //   moving.shapeColor="red"

drawSprites();
}