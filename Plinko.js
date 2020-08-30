class Plinko{
    constructor(x,y){
      var options={
          isStatic:true,
          restitution:0.8,
          friction:0.5,
          density:2.5
      }
      this.body = Bodies.circle(x,y,10,options);
      World.add(world,this.body); 
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,30,30);
      pop();
    }
}