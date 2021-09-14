
var bg, bgImg;
var cat;
var mouse,mouseImg;
var catImg1,catImg2,catImg4
var mouseImg2,mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 =loadAnimation("images/cat1.png");
    catImg2 =loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 =loadAnimation("images/cat4.png",)
    
    mouseImg=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4=loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     bg=createSprite(300,450,0,0);
     bg.addImage("bg",bgImg);

     cat=createSprite(650,700,0,0);
     cat.addAnimation("cat",catImg1);
     cat.scale=0.1
     


     mouse=createSprite(200,700,0,0);
     mouse.addAnimation("mouse",mouseImg);
     mouse.scale=0.1

   

     







}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x <(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cat",catImg2)
        cat.changeAnimation("cat")
        cat.x =300;







    }

   
  
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouse",mouseImg2);
mouse.changeAnimation("mouse")
mouse.frameDelay=25;
cat.velocityX=-1;
}

if(keyCode===RIGHT_ARROW){
    cat.addAnimation("cat",catImg2);
    cat.changeAnimation("cat")
    cat.frameDelay=25;
    
}
}
