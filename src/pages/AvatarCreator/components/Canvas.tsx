import { BaseBody, ForegroundLayer, Global } from "@/actions";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/AvatarDataContext";
import { Loader } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";

interface CanvasProps {}

const Canvas: React.FC<CanvasProps> = () => {
  const { data } = useContext(MyContext)!;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setloading] = useState(true)
  const [value,setvalue] = useState(Global.framey)


  const updateFramey = () => {
    let newFramey = value + 1;
    if (newFramey > 13) {
      newFramey = 10;
    }
      setvalue(newFramey);
    Global.setGlobalValue(newFramey); // Update the static framey in Global class
  };
  useEffect(() => {
    setloading(true)
    if (!data) return;
    let head = "male";
    let adultOrChild = "";
    let headcustom = ""
    let tailColour = data.tail_type === "none" ? "none" : data.tail_colour;
    let wingsHeader = data.wings_type === "dragonfly" || data.wings_type === "pixie" ? data.wings_opacity : "adult";
    let wingsColour = data.wings_type === "none" ? "none" : data.wings_colour;

    // Set head type based on body_type and head_type conditions
    if (data.body_type === "child") {
      head = "child";
      adultOrChild = "child";
    } else if (["pregnant", "female"].includes(data.body_type)) {
      head = "female";
      adultOrChild = "adult";
      
    } else if (["male", "muscular"].includes(data.body_type)) {
      head = "male";
      adultOrChild = "adult";
    }else if(data.body_type=="teen"){
      head = "female"
      adultOrChild = "adult";
    }

    if (data.head_type === "elderly") head += "_elderly";
    else if (data.head_type === "small") head += "_small";

    if(data.custom_head=="jack" || data.custom_head=="skeleton"){
      headcustom=data.custom_head
    }else{
      headcustom=data.body_colour
    }

    const imagePaths: string[] = [
      `/assets/Body/${data.body_type}/${data.body_colour}.png`,
     data.head_type=="custom" ? `/assets/Head/custom/${data.custom_head}/${head}/${headcustom}.png`: `/assets/Head/${head}/${data.body_colour}.png`,
      `/assets/Body/Tail/${data.tail_type}/${adultOrChild}/bg/${tailColour}.png`,
      `/assets/Body/Tail/${data.tail_type}/${adultOrChild}/fg/${tailColour}.png`,
      `/assets/Body/Wings/${data.wings_type}/${wingsHeader}/bg/${wingsColour}.png`,
      `/assets/Body/Wings/${data.wings_type}/${wingsHeader}/fg/${wingsColour}.png`,
      `/assets/Body/prosthesis/${data.prosthesis}/male/${data.prosthesis}.png`,
      `/assets/Body/prosthesis/${data.prosthesis}/male/mask/${data.prosthesis}.png`
    ];

    const loadImages = imagePaths.map((src) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    });

    Promise.all(loadImages)
      .then((images: HTMLImageElement[]) => {
        const [imageBody, imageHead, imageTailBg, imageTailFg, imageWingsBg, imageWingsFg, prosthesis, prosthesisMask] = images;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;


        const baseBody = new BaseBody(imageBody, imageHead, imageTailBg, imageWingsBg, prosthesis, prosthesisMask, 0, ctx);
        baseBody.draw();

        const foregroundLayer = new ForegroundLayer(imageTailFg, imageWingsFg, 0, ctx);
        foregroundLayer.draw();
        setloading(false)
  
        
      })
      .catch((error) => {
        console.error("Failed to load one or more images:", error);
        setloading(false)
        
      });
  }, [data,value]);
  return (
  <>
         
         <div className="absolute right-4 top-4">
         <Button variant={"secondary"} onClick={updateFramey}  className=" text-white bg-neutral-800">
            Rotate
          </Button>
         </div>
         
         <div className="">
          {loading ? <div className="absolute w-[64px] scale-150 z-20 h-[70px] bg-neutral-950 flex justify-center items-center">
            <Loader className="animate-spin"/>
          </div> : ''}
          <canvas className="scale-150 z-10" width={64} height={70} ref={canvasRef} />
          </div>
         
          
       </>  
       

  );
};

export default Canvas;
