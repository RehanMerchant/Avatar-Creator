
 export class Global {

    static framey = 10
    static framex = 0

    static getGlobalValue():number{
        return this.framex,this.framey
    }

    static setGlobalValue(y:number): void {
        this.framey = y;
      }

 }





 export class BaseBody extends Global {
    imagebody: any;
    imagehead: any;
    imagetail:any;
    imagewings:any;
    prosthesis:any;
    prosthesismask:any;
    imagenose:any;
    imagehorns:any;
    imagehair:any;
    imageeyes:any;
    animation: number;
    ctx: CanvasRenderingContext2D;
    SpriteSides = 64;
    imageear: any;
    
    constructor(imagebody:any,imagehead:any,imagetail:any,imagewings:any,prosthesis:any,prosthesismask:any,imageear:any,imagenose:any,imagehorns:any,imagehair:any,imageeyes:any,animation:number,ctx:CanvasRenderingContext2D){
        super()
        this.imagebody = imagebody;
        this.imagehead = imagehead;
        this.imagetail = imagetail;
        this.imagehorns=imagehorns;
        this.imagewings = imagewings;
        this.prosthesis = prosthesis;
        this.prosthesismask = prosthesismask;
        this.imageear = imageear;
        this.imagenose=imagenose;
        this.imagehair = imagehair;
        this.imageeyes = imageeyes;
        this.animation = animation;
        this.ctx = ctx;
  }
  getGlobalValue():number {
    return Global.framex, Global.framey
}


   draw(){
    this.ctx.clearRect(0,0,this.SpriteSides,this.SpriteSides)
    this.ctx.drawImage(
        this.imagetail,
        this.SpriteSides*BaseBody.framex,
        this.SpriteSides*BaseBody.framey,  
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
        this.ctx.drawImage(
            this.imagewings,
            this.SpriteSides*BaseBody.framex,
            this.SpriteSides*BaseBody.framey,  
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )

    this.ctx.drawImage(
    this.imagebody,
    this.SpriteSides*BaseBody.framex,
    this.SpriteSides*BaseBody.framey,
    this.SpriteSides,
    this.SpriteSides,
    0,
    0,
    this.SpriteSides,
    this.SpriteSides
    )
 
    this.ctx.drawImage(
        this.imagehead,
        this.SpriteSides*BaseBody.framex,
        this.SpriteSides*BaseBody.framey,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
        
        this.ctx.drawImage(
            this.prosthesismask,
            this.SpriteSides*BaseBody.framex,
            this.SpriteSides*BaseBody.framey,
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )
        this.ctx.drawImage(
            this.prosthesis,
            this.SpriteSides*BaseBody.framex,
            this.SpriteSides*BaseBody.framey,
            this.SpriteSides,
            this.SpriteSides,
            0,
            0,
            this.SpriteSides,
            this.SpriteSides
            )
            this.ctx.drawImage(
                this.imageear,
                this.SpriteSides*BaseBody.framex,
                this.SpriteSides*BaseBody.framey,  
                this.SpriteSides,
                this.SpriteSides,
                0,
                0,
                this.SpriteSides,
                this.SpriteSides
                )
                this.ctx.drawImage(
                    this.imagenose,
                    this.SpriteSides*BaseBody.framex,
                    this.SpriteSides*BaseBody.framey,  
                    this.SpriteSides,
                    this.SpriteSides,
                    0,
                    0,
                    this.SpriteSides,
                    this.SpriteSides
                    )
                    this.ctx.drawImage(
                        this.imageeyes,
                        this.SpriteSides*BaseBody.framex,
                        this.SpriteSides*BaseBody.framey,  
                        this.SpriteSides,
                        this.SpriteSides,
                        0,
                        0,
                        this.SpriteSides,
                        this.SpriteSides
                        )
                
                    this.ctx.drawImage(
                        this.imagehair,
                        this.SpriteSides*BaseBody.framex,
                        this.SpriteSides*BaseBody.framey,  
                        this.SpriteSides,
                        this.SpriteSides,
                        0,
                        0,
                        this.SpriteSides,
                        this.SpriteSides
                        )
                                    this.ctx.drawImage(
                                        this.imagehorns,
                                        this.SpriteSides*ForegroundLayer.framex,
                                        this.SpriteSides*ForegroundLayer.framey,
                                        this.SpriteSides,
                                        this.SpriteSides,
                                        0,
                                        0,
                                        this.SpriteSides,
                                        this.SpriteSides
                                        )
 
   }
    
 }

 


 
  

 export class ForegroundLayer extends Global {
    imagetailfg:any;
    imagewingsfg:any;

    animation: number;
    ctx: CanvasRenderingContext2D;
    SpriteSides = 64;
    constructor(imagetailfg:any,imagewingsfg:any,animation:number,ctx:CanvasRenderingContext2D){
        super()
        this.imagetailfg = imagetailfg;
        this.imagewingsfg = imagewingsfg;
        this.animation = animation
        this.ctx = ctx
  }
  getGlobalValue():number {
    return Global.framex, Global.framey

  }
      
   draw(){
   
    this.ctx.drawImage(
        this.imagewingsfg,
        this.SpriteSides*ForegroundLayer.framex,
        this.SpriteSides*ForegroundLayer.framey,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
    this.ctx.drawImage(
        this.imagetailfg,
        this.SpriteSides*ForegroundLayer.framex,
        this.SpriteSides*ForegroundLayer.framey,
        this.SpriteSides,
        this.SpriteSides,
        0,
        0,
        this.SpriteSides,
        this.SpriteSides
        )
      

   }
    
 }

 


 