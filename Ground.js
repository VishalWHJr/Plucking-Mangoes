class Ground{
    constructor(x, y, width){
        var options = {
            'isStatic': true,
            restituition: 1
        }
        this.body=Bodies.rectangle(x, y, width, 20, options);
        this.w=width;
        this.h=20;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.w, this.h);
    }
}