class GreenBox 
{ 
  constructor(x,y,width,height){
      var options = {  'restitution':0.0,
                       'friction':0.1,
                       
                       isStatic:false    }
      this.body = Bodies.rectangle (x,y,width,height,options);
      this.width  = width;
      this.height = height;
      World.add(world , this.body)
  }

  display(){
      var pos = this.body.position;
      var angle=this.body.angle;

      push()
      translate (pos.x ,pos.y)
      rotate (angle)
      rectMode(CENTER)
      strokeWeight(2);
      fill("green")
      rect(0 , 0 , this.width, this.height)
      pop();

}
}