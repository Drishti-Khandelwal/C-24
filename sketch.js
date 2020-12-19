const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var bird;
var ground;
var log1;
var pig;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(400,height-10,800,20);
    bird = new Bird(200,200);
    pig = new Pig(200,300);
    log1 = new Log(300,50,40,PI/2); 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log1.display();
}