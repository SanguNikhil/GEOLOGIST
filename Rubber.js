class Rubber {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':5,
            'density':1
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;

    World.add(world,this.body);
    }

display(){
    ellipseMode(RADIUS);
    fill("blue");
    circle(this.body.position.x,this.body.position.y,this.radius);
   }    
}