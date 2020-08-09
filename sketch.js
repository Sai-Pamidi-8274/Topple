const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground01;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;


    ground01 = new Ground(200, 380, 400, 10);
    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 200, 50, 50);
}

function draw() {
    background(150);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground01.display();
}


