var jogador
var imgsJogador = []
var inimigo
var imgsInimigo = []
var bg
var fase = 1

var imgs = []

function preload() {
  
  imgsJogador[0] = loadImage("image/jogador1.png"); 
  imgsJogador[1] = loadImage("image/jogador2.png");
  imgsJogador[2] = loadImage("image/jogador3.png");

  imgs[0] = loadImage("image/background1.jpg"); 
  imgs[1] = loadImage("image/background2.jpg");
  imgs[2] = loadImage("image/background3.jpg");

  imgsInimigo[0] = loadImage("image/inimigo1.png");
  imgsInimigo[1] = loadImage("image/inimigo2.png");
  imgsInimigo[2] = loadImage("image/inimigo3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(200,200,100,100);
  bg.velocityX = -4;
  mudarBg();

  jogador = createSprite(100,windowHeight/2,50,50);
  mudarNave();

  inimigo = createSprite(windowWidth+10,windowHeight/2,50,50);
  mudarInimigo();
}

function draw() {
  background(0);
   
  if(keyDown("up") ){
    jogador.y = jogador.y  -4;
  }

  if(keyDown("down") ){
    jogador.y = jogador.y  +4;
  }

  if(bg.x < -60){
    bg.x = bg.width/8
  }
  
 
  
  drawSprites();
}
function mudarBg(){
  bg.addImage(imgs[fase - 1]);
  
}
function mudarNave(){
  jogador.addImage(imgsJogador[fase-1]);  
}
function mudarInimigo(){
  inimigo.addImage(imgsInimigo[fase-1]);
}