 

 export class BaseBody {
    imagebody: any;
    imagehead: any;
    imagetail:any;
    imagewings:any;
    animation: number;
  
    ctx: CanvasRenderingContext2D;
    SpriteSides = 64;
    frame = 10;
    constructor(imagebody:any,imagehead:any,imagetail:any,imagewings:any,animation:number,ctx:CanvasRenderingContext2D){
        this.imagebody = imagebody;
        this.imagehead = imagehead;
        this.imagetail = imagetail;
        this.imagewings = imagewings;
        this.animation = animation
        this.ctx = ctx
  }
      
   draw(){
    this.ctx.clearRect(0,0,this.SpriteSides,this.SpriteSides)
    this.ctx.drawImage(
        this.imagetail,
        this.SpriteSides*0,
        this.SpriteSides*this.frame,  
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
        this.ctx.drawImage(
            this.imagewings,
            this.SpriteSides*0,
            this.SpriteSides*this.frame,  
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )

    this.ctx.drawImage(
    this.imagebody,
    this.SpriteSides*0,
    this.SpriteSides*this.frame,
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
        this.SpriteSides*this.frame,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
        

   }
    
 }

 


 