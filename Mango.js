class Mango{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h= height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
          var pos= this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w+20, this.h+20);
      }
    }