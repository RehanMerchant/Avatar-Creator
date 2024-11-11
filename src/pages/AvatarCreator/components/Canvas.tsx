
import{ BaseBody, BaseTail} from "@/actions";
import { MyContext } from "@/context/AvatarDataContext";
import { useContext, useEffect, useRef } from "react";




const Canvas =()=>{

  const { data } = useContext(MyContext)!;
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  

 


    useEffect(()=>{
      let head = "male"
      let adultorchild = ""
      let tailcolour = ""
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
      tailcolour="red"
     }

      let loaded =0
      const imagebody = new Image();
      const imagehead = new Image();
      const imagetail = new Image();
      imagebody.src = `./src/assets/Body/${data.body_type}/${data.body_colour}.png`;
      imagehead.src = `./src/assets/Head/${head}/${data.body_colour}.png`;
      imagetail.src = `./src/assets/Body/Tail/${data.tail_type}/${adultorchild}/bg/${tailcolour}.png`
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
    if(loaded == 3){
      basebodyfunc(ctx)
    }
     }
    imagehead.onload= () =>{
    loaded++;
    if(loaded == 3){
      basebodyfunc(ctx)
    }
       }

       imagetail.onload= () =>{
        loaded++;
        if(loaded == 3){
          basebodyfunc(ctx)
        }
           }


function basebodyfunc (ctx: CanvasRenderingContext2D){
  const basetail = new BaseTail(imagetail, 0, ctx);
  const basebody = new BaseBody(imagebody,imagehead, 0, ctx);
  basetail.draw();
  basebody.draw();
}
     
     console.log(data)

    
    },[data])

    

  return ( 
  <canvas className="scale-150" width="64" height="70" ref={canvasRef} />
 )
}

export default Canvas