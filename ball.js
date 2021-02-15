class Ball
{
    constructor(x, y, radius, color)
    {
        var bodyOptions=
        {
            restitution:1,
            frictionAir:0,
            friction:1,
            frictionStatic:1,
            density:1,
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,bodyOptions);
        World.add(world,this.body);
        this.color = color;
    }

    display()
    {
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}