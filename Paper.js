class Paper{
    constructor(x,y){

        var options = {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0
        }
        this.r = 70.2;
        this.body = Bodies.circle(x,y,(this.r-20)/2,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);  
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}
