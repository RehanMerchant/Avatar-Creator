 

 export class BaseBody {
    imagebody: any;
    imagehead: any;
    imagetail:any;
    animation: number;
    ctx: CanvasRenderingContext2D;
    SpriteSides = 64;
    constructor(imagebody:any,imagehead:any,animation:number,ctx:CanvasRenderingContext2D){
        this.imagebody = imagebody;
        this.imagehead = imagehead;
        this.animation = animation
        this.ctx = ctx
  }
      
   draw(){

  

    this.ctx.drawImage(
    this.imagebody,
    this.SpriteSides*0,
    this.SpriteSides*11,
    this.SpriteSides,
    this.SpriteSides,
    0,
    0,
    this.SpriteSides,
    this.SpriteSides
    )
 
    this.ctx.drawImage(
        this.imagehead,
        this.SpriteSides*0,
        this.SpriteSides*11,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
   }
    
 }

 export class BaseTail {
  imagetail: any;
  animation: number;
  ctx: CanvasRenderingContext2D;
  SpriteSides = 64;
  constructor(imagetail:any,animation:number,ctx:CanvasRenderingContext2D){
      this.imagetail = imagetail;
     this.animation = animation
      this.ctx = ctx
}
    
 draw(){
  this.ctx.clearRect(0,0,this.SpriteSides,this.SpriteSides)


  this.ctx.drawImage(
  this.imagetail,
  this.SpriteSides*0,
  this.SpriteSides*11, 
  this.SpriteSides,
  this.SpriteSides,
  0,
  0,
  this.SpriteSides,
  this.SpriteSides
  )

 }
  
}


 