 

const framey = 10
const framex = 0



 export class BaseBody {
    imagebody: any;
    imagehead: any;
    imagetail:any;
    imagewings:any;
    prosthesis:any;
    prosthesismask:any;
    animation: number;
    ctx: CanvasRenderingContext2D;
    SpriteSides = 64;
    constructor(imagebody:any,imagehead:any,imagetail:any,imagewings:any,prosthesis:any,prosthesismask:any,animation:number,ctx:CanvasRenderingContext2D){
        this.imagebody = imagebody;
        this.imagehead = imagehead;
        this.imagetail = imagetail;
        this.imagewings = imagewings;
        this.prosthesis = prosthesis;
        this.prosthesismask = prosthesismask
        this.animation = animation
        this.ctx = ctx
  }
      
   draw(){
    this.ctx.clearRect(0,0,this.SpriteSides,this.SpriteSides)
    this.ctx.drawImage(
        this.imagetail,
        this.SpriteSides*framex,
        this.SpriteSides*framey,  
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
        this.ctx.drawImage(
            this.imagewings,
            this.SpriteSides*framex,
            this.SpriteSides*framey,  
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )

    this.ctx.drawImage(
    this.imagebody,
    this.SpriteSides*framex,
    this.SpriteSides*framey,
    this.SpriteSides,
    this.SpriteSides,
    0,
    0,
    this.SpriteSides,
    this.SpriteSides
    )
 
    this.ctx.drawImage(
        this.imagehead,
        this.SpriteSides*framex,
        this.SpriteSides*framey,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
        
        this.ctx.drawImage(
            this.prosthesismask,
            this.SpriteSides*framex,
            this.SpriteSides*framey,
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )
        this.ctx.drawImage(
            this.prosthesis,
            this.SpriteSides*framex,
            this.SpriteSides*framey,
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )

   }
    
 }

 


 
  

 export class ForegroundLayer {
    imagetailfg:any;
    imagewingsfg:any;
    animation: number;
    ctx: CanvasRenderingContext2D;
    SpriteSides = 64;
    constructor(imagetailfg:any,imagewingsfg:any,animation:number,ctx:CanvasRenderingContext2D){
        this.imagetailfg = imagetailfg;
        this.imagewingsfg = imagewingsfg;
        this.animation = animation
        this.ctx = ctx
  }
      
   draw(){
   
    this.ctx.drawImage(
        this.imagewingsfg,
        this.SpriteSides*framex,
        this.SpriteSides*framey,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
    this.ctx.drawImage(
        this.imagetailfg,
        this.SpriteSides*framex,
        this.SpriteSides*framey,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
   

   }
    
 }

 


 