class BodyConstraint
{

    constructor(body1, body2, length, strength, offset1, offset2) {
        var conOpt =
        {
            bodyA: body1,
            bodyB: body2,
            length: length,
            stiffness: strength,
            pointA: offset1,
            pointB: offset2
        }

        this.constraint = Constraint.create(conOpt);
        World.add(world, this.constraint);
    }

    drawLine(color, width)
    {
        push();
        stroke(color);
        strokeWeight(width);

        var body1ConPos = {x:this.constraint.bodyA.position.x + this.constraint.pointA.x, y:this.constraint.bodyA.position.y + this.constraint.pointA.y};
        var body2ConPos = {x:this.constraint.bodyB.position.x + this.constraint.pointB.x, y:this.constraint.bodyB.position.y + this.constraint.pointB.y};

        line(body1ConPos.x, body1ConPos.y, body2ConPos.x, body2ConPos.y);
        pop();
    }

    drawPoints(size, point1color, point2color)
    {
        var body1ConPos = {x:this.constraint.bodyA.position.x + this.constraint.pointA.x, y:this.constraint.bodyA.position.y + this.constraint.pointA.y};
        var body2ConPos = {x:this.constraint.bodyB.position.x + this.constraint.pointB.x, y:this.constraint.bodyB.position.y + this.constraint.pointB.y};

        push();
        strokeWeight(size);
        stroke(point1color);
        point(body1ConPos.x, body1ConPos.y);
        stroke(point2color)
        point(body2ConPos.x, body2ConPos.y);
        pop();
    }
}