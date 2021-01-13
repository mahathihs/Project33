var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division=[];

var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState="play";
var gameState="end";
var particle;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  Ground = new ground(width/2,height,width,20);
 
  for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

  for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    plinkos.push(new Plinko(j,375));
    }

    if(particle != null){
      particle.display();
 
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score=score+500;
         particle=null;
         if(count>=5) gameState="end";
       }
       if(particle.body.position.x>301 &&
        particle.body.position.x<600){
          score=score+100;
          particle=null;
          if(count>=5) gameState="end";
        }
         if(particle.body.position.x>601 &&
          particle.body.posiiton.x<900){
            score=score+200;
            particle=null;
            if(count>=5) gameState="end";
          }
     }
    }

    if(count>=5){
      gameState= "end";
      textSize(30);
      fill("white");
      text("GAME OVER",420,550);
    }
}

 function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

 textSize(28);
 text("500",18,500);
 text("500",95,500);
 text("500",175,500);
 text("500",260,500);
 text("100",340,500);
 text("100",420,500);
 text("100",500,500);
 text("200",580,500);
 text("200",660,500);
 text("200",740,500);

 Ground.display();
 
Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   particles[j].display();
   }

   for (var k = 0; k < division.length; k++) {
     division[k].display();
   }
}

function mousePressed(){
  if(gameState !== "end"){
    count++

    particle=new Particle(mouseX,10,10,10);
  }
  }