
import{ BaseBody, ForegroundLayer} from "@/actions";
import { MyContext } from "@/context/AvatarDataContext";
import { useContext, useEffect, useRef } from "react";




const Canvas =()=>{

  const { data } = useContext(MyContext)!;
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  

 


    useEffect(()=>{
      let head = "male"
      let adultorchild = ""
      let tailcolour = ""
      let wingsheader = ""
      let wingscolour =""
      if(data.body_type == 'child'){
          head = "child"
          adultorchild="child"
      }else if (data.body_type == 'pregnant' || data.body_type == 'female' ){
          head = "female"
           adultorchild="adult"
      }else if(data.body_type == 'male' || data.body_type == 'muscular'){
            head = "male"
             adultorchild="adult"
      }else{
        head = "female"
         adultorchild="adult"
      }

     if(data.head_type=="elderly"){
      head = head+"_"+"elderly"
     }else if(data.head_type=="small"){
      head = head+"_"+"small"
     }

     if(data.tail_type=="none"){
          tailcolour="none"
     }else{
      tailcolour=data.tail_colour;
     }

    if(data.wings_type=="dragonfly" || data.wings_type=="pixie"){
      wingsheader=data.wings_opacity
    }else{
      wingsheader="adult";
    }
     
    if(data.body_type == "child"){
      data.wings_type="none"
    }


    if(data.wings_type=="none"){
      wingscolour="none"
 }else{
  wingscolour=data.wings_colour;
 }

      let loaded =0
      const imagebody = new Image();
      const imagehead = new Image();
      const imagetail = new Image();
      const imagetailfg = new Image();
      const imagewingsfg = new Image();
      const imagewings = new Image();
      const prosthesis = new Image();
      const prosthesismask = new Image();
      imagebody.src = `/src/assets/Body/${data.body_type}/${data.body_colour}.png`;
      imagehead.src = `/src/assets/Head/${head}/${data.body_colour}.png`;
      imagetail.src = `/src/assets/Body/Tail/${data.tail_type}/${adultorchild}/bg/${tailcolour}.png`
      imagetailfg.src = `/src/assets/Body/Tail/${data.tail_type}/${adultorchild}/fg/${tailcolour}.png`
      imagewings.src = `/src/assets/Body/Wings/${data.wings_type}/${wingsheader}/bg/${wingscolour}.png`
      imagewingsfg.src = `/src/assets/Body/Wings/${data.wings_type}/${wingsheader}/fg/${wingscolour}.png`
      prosthesis.src = `/src/assets/Body/prosthesis/${data.prosthesis}/male/${data.prosthesis}.png`
      prosthesismask.src = `/src/assets/Body/prosthesis/${data.prosthesis}/male/mask/${data.prosthesis}.png`
      const canvas = canvasRef.current
      if(!canvas){
          return;
      }
      const ctx = canvas.getContext('2d')
      if(!ctx){
          return;
      }
      
     imagebody.onload= () =>{
    loaded++;
    if(loaded == 8){
      basebodyfunc(ctx)
    }
     }
    imagehead.onload= () =>{
    loaded++;
    if(loaded == 8){
      basebodyfunc(ctx)
    }
       }

       imagetail.onload= () =>{
        loaded++;
        if(loaded == 8){
          basebodyfunc(ctx)
        }
           }

           imagewings.onload= () =>{
            loaded++;
            if(loaded == 8){
              basebodyfunc(ctx)
            }
               }

               imagetailfg.onload= () =>{
                loaded++;
                if(loaded == 8){
                  basebodyfunc(ctx)
                }
                   }
                   imagewingsfg.onload= () =>{
                    loaded++;
                    if(loaded == 8){
                      basebodyfunc(ctx)
                    }
                       }
                       prosthesis.onload= () =>{
                        loaded++;
                        if(loaded == 8){
                          basebodyfunc(ctx)
                        }
                           }
                           prosthesismask.onload= () =>{
                            loaded++;
                            if(loaded == 8){
                              basebodyfunc(ctx)
                            }
                               }


function basebodyfunc (ctx: CanvasRenderingContext2D){
  const basebody = new BaseBody(imagebody,imagehead,imagetail,imagewings,prosthesis,prosthesismask, 0, ctx);
  basebody.draw();
  const foregroundlayer = new ForegroundLayer(imagetailfg,imagewingsfg,0,ctx);
  foregroundlayer.draw();
}
     
     console.log(data)

    
    },[data])

    

  return ( 
    <>
  <canvas className="scale-150" width="64" height="70" ref={canvasRef} />
  </>
 )
}

export default Canvas