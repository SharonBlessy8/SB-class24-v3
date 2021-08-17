const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var cb,pb;
var cp,p;
var ca, pa;
var arrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
cb = new ComputerBase(width -300, random(450, height-300),180,150);
cp = new Computer(width -280, cb.body.position.y-153,50,180);

pb =new PlayerBase(300, random(450,height -300) ,180,150);

p = new Player(285, pb.body.position.y-153,50,180);

ca= new ComputerArcher(width -340, cb.body.position.y -180,120,120);
pa =  new PlayerArcher(340, pb.body.position.y -180, 120,120); 

arrow = new PlayerArrow(pa.body.position.x, pa.body.position.y,100,10);
}

function draw() {


  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

cb.display();
pb.display();
   //display Player and computerplayer
cp.display();
p.display();

ca.display();
pa.display();

arrow.display();

if(keyCode === 32){
   arrow.shoot(pa.body.angle);
}
}
