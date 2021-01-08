class Rope{
    constructor(bodyA, pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.008,
           length:2.5,
           damping:0.0001
       }
      
        this.body=Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
       if(this.body.bodyA){
        var pointA= this.body.bodyA.position;
        var pointB=this.body.pointB;
        push();
        stroke(1);
        strokeWeight(2);
        line(pointA.x,pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
    fly(){
        this.body.bodyA=null;
    }
    attach(body){
        this.body.bodyA=body;
    }
}