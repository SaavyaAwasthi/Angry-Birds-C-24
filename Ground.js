class Ground{

    constructor(x,y,width1,height1){

        var options ={

            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width1,height1, options)
        this.width = width1;
        this.height = height1;

        World.add(world, this.body)
    }   
    
    display(){

        fill("brown")

        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
    
}