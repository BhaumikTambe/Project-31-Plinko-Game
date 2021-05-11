//VERY SORRY MAM FOR VERY LATE
Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
 
var particle = [];
var plinko = [];
var division = [];

var dHeight = 300;

function setup() {
  createCanvas(500, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   //Divisions
   for (var a = 0; a <= width; a = a + 80) {
     division.push(new Division(a, height - dHeight/2, 10, dHeight));
   }

    //Plinkos
    for (var i = 40; i <= width; i = i + 50) {
       plinko.push(new Plinko(i, 75));
    }
    for (var i = 15; i <= width-10; i = i + 50) {
       plinko.push(new Plinko(i, 175));
    }
    for (var i = 40; i <= width; i = i + 50) {
      plinko.push(new Plinko(i, 275));
   }
   for (var i = 15; i <= width-10; i = i + 50) {
      plinko.push(new Plinko(i, 375));
   }
}
 
function draw() {
  background("black");
  Engine.update(engine);
  
  //Producing Particle
  if(frameCount % 10 === 0){
    particle.push(new Particle(random(width/2 - 100, width/2 + 150), 10,10));
  }
  //
   for (var i = 0; i < plinko.length; i++) {
     plinko[i].display(); 
   }
  for (var i = 0; i < particle.length; i++) {
     particle[i].display();
   }
   for (var a = 0; a < division.length; a++) {
     division[a].display();
   }

}