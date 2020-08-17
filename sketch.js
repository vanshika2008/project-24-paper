
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

var paper1;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(200,200,20,20);
}


function draw() {
  background(37,37,37); 
  Engine.update(engine); 
  paper1.display();
  drawSprites();
 
}



