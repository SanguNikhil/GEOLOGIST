
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hammer,rubber,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	hammer = new Hammer(200,40,100,20);
	stone = new Stone(90,520,100,100);
	rubber = new Rubber(640,40,10);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



