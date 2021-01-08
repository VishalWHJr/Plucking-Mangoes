class Tree{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.width = 400;
        this.height = 400;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
    }