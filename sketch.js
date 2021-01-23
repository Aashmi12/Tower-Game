const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygonImg;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var slingShot;
var ball;
var score = 0;
var bg;
var backgroundImg;

function preload(){
  getBackgroundImg();
  polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1600,600);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    box1 = new Box(576,414,40,50);
    box2 = new Box(617,414,40,50);
    box3 = new Box(658,414,40,50);
    box4 = new Box(699,414,40,50);
    box5 = new Box(740,414,40,50);
    box6 = new Box(781,414,40,50);
    box7 = new Box(822,414,40,50);

    box8 = new Box(617,363,40,50);
    box9 = new Box(658,363,40,50);
    box10 = new Box(699,363,40,50);
    box11 = new Box(740,363,40,50);
    box12 = new Box(781,363,40,50);

    box13 = new Box(658,312,40,50);
    box14 = new Box(699,312,40,50);
    box15 = new Box(740,312,40,50);

    box16 = new Box(699,261,40,50);



    box17 = new Box(1117,264,40,50);
    box18 = new Box(1158,264,40,50);
    box19 = new Box(1199,264,40,50);
    box20 = new Box(1240,264,40,50);
    box21 = new Box(1281,264,40,50);

    box22 = new Box(1158,213,40,50);
    box23 = new Box(1199,213,40,50);
    box24 = new Box(1240,213,40,50);

    box25 = new Box(1199,163,40,50);

    
    ground1 = new Ground(800,600,1600,20);
    ground2 = new Ground(700,450,350,20);
    ground3 = new Ground(1200,300,300,20);
   

  ball = Bodies.circle(100,200,20,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

}


function draw(){
  
  if(backgroundImg){
    background(backgroundImg);
   }
   
   fill("white");
   textSize(35);
   text("Drag the hexagon and release it, to launch towards the box/blocks", 200,70);

   fill("white");
   textSize(30);
   text("Press the Space Bar to Play Again",1000,550);

   fill("white");
   textSize(30);
   text("SCORE : " + score,20,550);

    push()
    fill("yellow");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    pop()

    push()
    fill("blue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    pop()

    push()
    fill("#1ABAAA");
    box13.display();
    box14.display();
    box15.display();
    pop()

    push()
    fill("#D239AC");
    box16.display();
    pop()


    push()
    fill("#1ABAAA");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    pop()

    push()
    fill("#D239AC");
    box22.display();
    box23.display();
    box24.display();
    pop()

    push()
    fill("#9CF33B");
    box25.display();
    pop()

    push()
    fill("black");
    ground1.display();
    ground2.display();
    ground3.display();
    pop()

    slingShot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    imageMode(CENTER)
    image(polygonImg,ball.position.x,ball.position.y,40,40);
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball)
  }
}


async function  getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);
  
   
  
   if(hour>= 06 && hour<= 18){
  bg = "Bg1.jpg";
   }
  else{
    bg = "Goodnight.jpg";
  }
   
   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
  }
  
  


