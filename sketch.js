
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1, mango2, mango3, mango4, mango5;
var tree;
var ground;
var rope, stone;
var gameState;
var onHand;
var thrown;
var boy, boyImg;
function preload()
{
	boyImg= loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 650);
	engine = Engine.create();
	world = engine.world;

	boy= createSprite(250,height-100,0,0);
	boy.scale=0.12;
	boy.addImage(boyImg);
	
	
	ground=new Ground(width/2, height-30, width);
	tree= new Tree(1000, 430)
	mango1=new Mango(1000, 300, 30,30)
	mango2=new Mango(1100, 380, 30,30)
	mango3=new Mango(980, 350 , 30,30)
	mango4=new Mango(1050, 380, 30,30)
	mango5=new Mango(1100, 300, 30,30)
	mango6=new Mango(950, 300, 30,30)
	mango7=new Mango(1050, 300, 30,30)
	mango8=new Mango(900, 350 , 30,30)
	stone= new Stone(200,400,30,30);
	rope= new Rope(stone.body,{x:180, y:470});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();
  rope.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}

function mouseDragged(){
    if(gameState===onHand){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}}

function mouseReleased(){
    rope.fly();
    gameState=thrown;
}
function keyPressed(){
    if(keyCode === 32 && gameState===thrown){
        Matter.Body.setPosition(stone.body,{x:180,y:470});
        rope.attach(stone.body);
        gameState=onHand
    }
}

function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position 
    stoneBodyPosition=lstone.body.position

    var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
       if(distance<=lmango.w+lstone.h &&distance<=lmango.h+lstone.h)
        {
            Body.setStatic(lmango.body, false);
        }
}

