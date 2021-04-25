
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var Bg;
var ground;
var SMN;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var mon;
var monsim
function preload() {
//preload the images here
Bg = loadImage("bg.jpg");
monsim = loadImage("MMMM.jpeg");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here


  engine = Engine.create();
  world = engine.world;

  ground = new Ground (200,700,2000,30);
  SMN = new superman(400,400);
  mon = new STAR (1000,400);
  b1 = new B (700,635,100,100);
  b2 = new B (800,635,100,100);
  b3 = new B (700,535,100,100);
  b4 = new B (800,535,100,100);
  b5 = new B (700,435,100,100);
  b6 = new B (800,435,100,100);
  b7 = new B (700,335,100,100);
  b8 = new B (800,335,100,100);
}

function draw() {
  background(Bg);
  Engine.update(engine);
ground.display();
SMN.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
mon.display();
 // drawSprites();
 
}

