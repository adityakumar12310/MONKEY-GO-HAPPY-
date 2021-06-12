var monkey, monkey_running;
var banana, bananaImage, stone, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var ground;
var SurvivalTime = 0;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600, 400);
  monkey = createSprite(200, 300, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300, 370, 600);
  ground.velocityX = -4;
  monkey.debug = true;

  monkey.collide(ground);
  
  bananaGroup =  new Group();
  obstacleGroup = new Group();
}
  

function draw(){
   var SurvivalTime = SurvivalTime + Math.round(getFrameRate()/2);

  background("white");
  drawSprites();
  monkey.collide(ground);
  
  text("Score :"+score,50,50);
   SurvivalTime = Math.ceil(frameCount/frameRate() );

  text("SurvivalTime :" + SurvivalTime,150,50);
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score = score + 1;
  }
   
  if (keyDown("space") && monkey.y >= 289) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.3;
  ground.velocityX = -7;
  ground.x = ground.width / 2;
  
  if(World.frameCount%200 === 0){
    fruits();
   
  }
  if(World.frameCount%200 === 0){
    stones();
    
}
  fruits();
  stones()
}


function fruits(){
  if(frameCount% 150 === 0){  
     var banana = createSprite(600,220,0,0);
     banana.addImage(bananaImage);
    banana.scale = 0.1
  banana.velocityX = -3;
    banana.lifetime = 150
    bananaGroup.add(banana);
  }
 
 
}
function stones(){
  if(frameCount% 150 === 0){
     stone.addImage(obstacleImage);
  stone.velocityX = -4;
  }
  stone = createSprite(670,290,10,10);
 
  stone.scale = 0.2
  obstacleGroup.add(stone);
}