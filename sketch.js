const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var w = 15; w<=width-10; w=w+50){
    plinkos.push(new Plinko(w,275));
  }

  for(var q = 15; q<=width-10; q=q+50){
    plinkos.push(new Plinko(q,375));
  }
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
    }
  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  }

  if(frameCount%60===0){
    particles.push(new Praticles(random(width/2-10,width/2+10),10,10));
  }

  drawSprites();
}