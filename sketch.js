var fR,mR;

function setup() {
  createCanvas(800,400);
  fR=createSprite(400, 200, 100, 100);
  fR.shapeColor="red";
  mR=createSprite(600, 200, 70, 70);
  mR.shapeColor="green";

}

function draw() {
  background(0); 
  
  mR.x=World.mouseX;
  mR.y=World.mouseY;

  if(mR.x-fR.x<mR.width/2+fR.width/2 && fR.x-mR.x<mR.width/2+fR.width/2 
    && mR.y-fR.y<mR.height/2+fR.height/2 && fR.y-mR.y<mR.height/2+fR.height/2){
    fR.shapeColor="white";
    mR.shapeColor="purple";
    
  }
  else{
    fR.shapeColor="red";
    mR.shapeColor="green";
  }
  drawSprites();
}