
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj,groundObject, paperObject, chain;	
var sling;
var world;


function preload(){
  dustbinObj=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
  groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
  
  sling = new Chain(paperObject.body,{x:200, y:450}); 
  
  
  var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1600,
        height: 700,
        wireframes: false
      }
    
    
    });


  
  
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  sling.display(); 
}
  
function mouseDragged(){
  Matter.Body.setPosition(this.paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}


}

