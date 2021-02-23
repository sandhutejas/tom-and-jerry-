var cat1,cat2,cat3;
var garden,mouse1;
var mouse2,mouse3;
var tom,jerry;
function preload() {
    //load the images here
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
    garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600,20,20);
   tom.addAnimation("tom",cat1);
   tom.scale=0.2; 
   jerry=createSprite(200,600,20,20);
   jerry.addAnimation("jerry",mouse1);
   jerry.scale=0.15; 
   
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomstopped",cat3);
    tom.changeAnimation("tomstopped",cat3);
    tom.x =300;
    tom.scale=0.2; 
    
    jerry.addAnimation("jerrystopped",mouse3);
    jerry.changeAnimation("jerrystoped",mouse3);
    jerry.scale=0.15; 
}

    
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("tomrunning",cat2);
tom.changeAnimation("tomrunning",cat2);

jerry.addAnimation("jerryteasing",mouse2);
jerry.changeAnimation("jerryteasing",mouse2);
}
  //For moving and changing animation write code here


}
