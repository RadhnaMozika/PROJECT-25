
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(width/2, height-50, width, 25);


	paper1 = new Paper(60, 220, 40);
	
	bin1 = new BinImage(1150, 523, 300, 20);

	bin2 = new Bin(990, 373, 20, 300);
	bin3 = new Bin(1280, 373, 20, 300);
	
	Engine.run(engine);
	keyPressed();
}


function draw() {
	
  rectMode(CENTER);
  background(200);
  ground.display();
  
  bin2.display();
  bin3.display();

  imageMode(CENTER);
  paper1.display();
  bin1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body, paper1.body.position, {x:400, y:-400});
	}
}

