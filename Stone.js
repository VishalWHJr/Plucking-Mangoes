class Stone{
    constructor(x, y, width, height) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
          var pos= this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w+20, this.h+20);
      }
    }