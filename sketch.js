const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var world, engine;

var topBody;
var ball1, ball2, ball3, ball4, ball5;
var c1, c2, c3, c4, c5;

var mCon;

function setup()
{
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	topBody = new StaticBody(400, 100, 1, 1, "blue");

	ball1 = new Ball(-100, 100, 50, 'red');
	ball2 = new Ball(300, 400, 50, 'orange');
	ball3 = new Ball(400, 400, 50, 'yellow');
	ball4 = new Ball(500, 400, 50, 'green');
	ball5 = new Ball(600, 400, 50, 'blue');

	c1 = new BodyConstraint(ball1.body,topBody.body, 300, 1, {x:0,y:0}, {x:-200,y:0});
	c2 = new BodyConstraint(ball2.body, topBody.body, 300, 1, {x:0,y:0}, {x:-100,y:0});
	c3 = new BodyConstraint(ball3.body, topBody.body, 300, 1, {x:0,y:0}, {x:0,y:0});
	c4 = new BodyConstraint(ball4.body, topBody.body, 300, 1, {x:0,y:0}, {x:100,y:0});
	c5 = new BodyConstraint(ball5.body, topBody.body, 300, 1, {x:0,y:0}, {x:200,y:0});

	var canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();

	var mCOpt = 
	{
		mouse: canvasMouse
	}

	mCon = MouseConstraint.create(engine, mCOpt);

	World.add(world, mCon);

	Engine.run(engine);
  
}


function draw()
{
	noStroke();
	background(0);
	
	ballPositions();

	if (mCon.body)
	{
		fill("gray");
		ellipseMode(RADIUS);
		ellipse(mCon.body.position.x, mCon.body.position.y, 75, 75);		
	}
	
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	c1.drawLine('orange', 10);
	c2.drawLine('yellow', 10);
	c3.drawLine('green', 10);
	c4.drawLine('blue', 10);
	c5.drawLine('red', 10);
	
	textAlign(CENTER);
	textSize(20);
	fill("white");
	text('Press R to reset.', width/2, 600);
	text('Use your mouse to drag around the balls.', width/2, 625);
	text('Press a key between 1-5 to set back that many balls.', width/2, 650);
}

function ballPositions()
{
	if (keyWentDown('r'))
	{
		Body.setPosition(ball1.body, {x:200, y:400});
		Body.setPosition(ball2.body, {x:300, y:400});
		Body.setPosition(ball3.body, {x:400, y:400});
		Body.setPosition(ball4.body, {x:500, y:400});
		Body.setPosition(ball5.body, {x:600, y:400});
		
		Body.setVelocity(ball1.body, {x:0, y:0});
		Body.setVelocity(ball2.body, {x:0, y:0});
		Body.setVelocity(ball3.body, {x:0, y:0});
		Body.setVelocity(ball4.body, {x:0, y:0});
		Body.setVelocity(ball5.body, {x:0, y:0});
	}

	if (keyWentDown('1'))
	{
		Body.setPosition(ball1.body, {x:-100, y:100});
		Body.setPosition(ball2.body, {x:300, y:400});
		Body.setPosition(ball3.body, {x:400, y:400});
		Body.setPosition(ball4.body, {x:500, y:400});
		Body.setPosition(ball5.body, {x:600, y:400});
		
		Body.setVelocity(ball1.body, {x:0, y:0});
		Body.setVelocity(ball2.body, {x:0, y:0});
		Body.setVelocity(ball3.body, {x:0, y:0});
		Body.setVelocity(ball4.body, {x:0, y:0});
		Body.setVelocity(ball5.body, {x:0, y:0});
	}

	if (keyWentDown('2'))
	{
		Body.setPosition(ball1.body, {x:-100, y:100});
		Body.setPosition(ball2.body, {x:0, y:100});
		Body.setPosition(ball3.body, {x:400, y:400});
		Body.setPosition(ball4.body, {x:500, y:400});
		Body.setPosition(ball5.body, {x:600, y:400});
		
		Body.setVelocity(ball1.body, {x:0, y:0});
		Body.setVelocity(ball2.body, {x:0, y:0});
		Body.setVelocity(ball3.body, {x:0, y:0});
		Body.setVelocity(ball4.body, {x:0, y:0});
		Body.setVelocity(ball5.body, {x:0, y:0});
	}
	
	if (keyWentDown('3'))
	{
		Body.setPosition(ball1.body, {x:-100, y:100});
		Body.setPosition(ball2.body, {x:0, y:100});
		Body.setPosition(ball3.body, {x:100, y:100});
		Body.setPosition(ball4.body, {x:500, y:400});
		Body.setPosition(ball5.body, {x:600, y:400});
		
		Body.setVelocity(ball1.body, {x:0, y:0});
		Body.setVelocity(ball2.body, {x:0, y:0});
		Body.setVelocity(ball3.body, {x:0, y:0});
		Body.setVelocity(ball4.body, {x:0, y:0});
		Body.setVelocity(ball5.body, {x:0, y:0});
	}

	if (keyWentDown('4'))
	{
		Body.setPosition(ball1.body, {x:-100, y:100});
		Body.setPosition(ball2.body, {x:0, y:100});
		Body.setPosition(ball3.body, {x:100, y:100});
		Body.setPosition(ball4.body, {x:200, y:100});
		Body.setPosition(ball5.body, {x:600, y:400});
		
		Body.setVelocity(ball1.body, {x:0, y:0});
		Body.setVelocity(ball2.body, {x:0, y:0});
		Body.setVelocity(ball3.body, {x:0, y:0});
		Body.setVelocity(ball4.body, {x:0, y:0});
		Body.setVelocity(ball5.body, {x:0, y:0});
	}

	if (keyWentDown('5'))
	{
		Body.setPosition(ball1.body, {x:-100, y:100});
		Body.setPosition(ball2.body, {x:0, y:100});
		Body.setPosition(ball3.body, {x:100, y:100});
		Body.setPosition(ball4.body, {x:200, y:100});
		Body.setPosition(ball5.body, {x:300, y:100});
		
		Body.setVelocity(ball1.body, {x:0, y:0});
		Body.setVelocity(ball2.body, {x:0, y:0});
		Body.setVelocity(ball3.body, {x:0, y:0});
		Body.setVelocity(ball4.body, {x:0, y:0});
		Body.setVelocity(ball5.body, {x:0, y:0});
	}
}