class Umbrella {
    contructor(x,y){
        var options = {
            'isStatic': true
        }
        this.umb = Bodies.circles(x,y,50,options);
        this.image = loadImage("images/Walking Frame/walking_1.png");
//         this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
//         "walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        World.add(world , this.body);
    }

    display(){
        var pos = this.umb.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,400,400);
    }

}
