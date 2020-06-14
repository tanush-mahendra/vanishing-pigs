class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.VIsibility=255;
      }
display(){
  if(this.body.speed<3){
    super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    this.Visibility=this.Visibility-5;
    tint(255,this,this.Visibility);
    image(this.image,this.body.position.x,this.body.position.x,50,50);
    pop();
  }
}
};