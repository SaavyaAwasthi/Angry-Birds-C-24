const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;

function setup(){

    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    ground = new Ground(600,390,1200,20);
    box2 = new Box(920, 320, 70, 70)
    pig1 = new Piggy(810,350);
    log1 = new Log(810,260,300,PI/2)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Piggy(810,220);
    log2 = new Log(810,180,300,PI/2)
    box5 = new Box(805,160,70,70);
    log3 = new Log(760,120,150,PI/6)
    log4 = new Log(870,120,150,-PI/5.5)
    bird = new Bird(810,98);

  /*  var render = Matter.Render.create({ element: document.body,
         engine : engine, options : { width : 400, height : 400, showAngleIndicator : true, 
            wireframes : true } }) 
    Matter.Render.run(render);*/
}

function draw(){
    background(0);

    fill("white")
    text(mouseX + ' , '+ mouseY, 300, 50);

    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    box5.display();
    log4.display();
    bird.display();
   

}