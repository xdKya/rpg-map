var player;
var fundo;

function preload(){
  fundo = loadImage("333121.jpg");
}
function setup(){
  createCanvas(600,600);

  player = createSprite(200,200,10,10);
  player.shapeColor = "blue";
}

function draw(){
  background('green');

  image(fundo,0,0,1920,1080)

  console.log("X: "+player.x,"Y: "+player.y)

  if(player.x <= 300){
    camera.x = 300
  }else if(player.x >=1620){
    camera.x = 1620;
  }else{
    camera.x = player.x
  }

  

  if(player.y <=300){
    camera.y = 300;
  }else if(player.y >=780){
    camera.y = 780;
  } else{
    camera.y = player.y
  }
  

  if(keyDown("left")){
    player.x -=10
  }
  if(keyDown("right")){
    player.x +=10
  }
  if(keyDown("up")){
    player.y -=10
  }

  if(keyDown("down")){
    player.y +=10
  }





  drawSprites()
}


