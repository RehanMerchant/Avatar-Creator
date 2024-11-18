import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { MyContext } from "@/context/AvatarDataContext";
import Bodice from "/assets/base_asset/Dress/bodice.png";
import Kimino from "/assets/base_asset/Dress/kimino.png";
import Sash from "/assets/base_asset/Dress/sash.png";
import Slit from "/assets/base_asset/Dress/slit.png";


const PrebuiltDress = () => {

    interface AvatarOptionsBoxProps {
        title: string;
        image: any;
        bodytype:string;
      }
      
      const AvatarOptionsBox = ({ title, image,bodytype }: AvatarOptionsBoxProps) => {
        const { setData, data } = useContext(MyContext)!;
        return (
          <div
            onClick={() => {
              setData({ ...data, dress_type:"Prebuilt", body_type:bodytype, dress:title , dress_colour:"blue"});
            }}
            className="flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <div
              className={cn(
                "h-[64px] w-[64px]  hover:border-white transition-all border-4 rounded-md border-neutral-800",
                data.dress == title ? "border-white" : ""
              )}
            >
              <img src={image} className="-mt-1 select-none" />
            </div>
            <p className="font-medium text-neutral-200 text-xs select-none capitalize">
              {title}
            </p>
          </div>
        );
      };

      interface ColourContainerProps {
        colourCode: string;
        title: string;
        link:string;
      }
      
      const ColourContainer = ({ colourCode, title, link }: ColourContainerProps) => {
        const { setData, data } = useContext(MyContext)!;
        return (
          <div
            onClick={() => {
              setData({ ...data, dress_colour: link });
            }}
            className={cn(
              "flex flex-col items-center justify-center  cursor-pointer  hover:border-white transition-all border-[3px] border-neutral-900 pt-2 rounded-sm",
              data.dress_colour == link ? "border-white" : ""
            )}
          >
            <div style={{ backgroundColor: colourCode }} className="w-7 h-3.5" />
            <p className="text-[12px] select-none  ">{title}</p>
          </div>
        );
      };
      const { setData, data } = useContext(MyContext)!;

  return (
    <div className="w-full">
     { data.body_type =="female" || data.body_type == "teen" ?  <div>
      
      <p className="pt-3 pb-4 font-medium">
        Female
      </p>
      <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                      <AvatarOptionsBox
                          title={"none"}
                          image={""}
                          bodytype="female"
                        />
                        <AvatarOptionsBox
                          title={"kimono"}
                          image={Kimino}
                           bodytype="female"
                        />
                        <AvatarOptionsBox
                          title={"sash"}
                          image={Sash}
                           bodytype="female"
                        />
                      </CarouselItem>

                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"slit"}
                          image={Slit}
                           bodytype="female"
                        />

                         <AvatarOptionsBox
                          title={"bodice"}
                          image={Bodice}
                           bodytype="female"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    
                    <CarouselPrevious
                      className="ml-11 text-white border-none h-10 w-5"
                      variant={"link"}
                    />
                    <CarouselNext
                      className="mr-11 text-white border-none h-10 w-5"
                      variant={"link"}
                    />
                   
                  </Carousel>
                 { data.dress =="kimono" || data.dress == "kimono_split" ? <div className="mt-4 flex flex-col gap-2">
                    <p className="pb-1 font-medium">
                      Edit Kimono
                    </p>

                    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.dress == "kimono"}
          onChange={() => setData({ ...data, dress: "kimono" })}
          className="size-4"
        />
        <p className="font-medium">Default</p>
      </div>
                  <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.dress == "kimono_split"}
          onChange={() => setData({ ...data, dress: "kimono_split" })}
          className="size-4"
        />
        <p className="font-medium">Split Kimino</p>
      </div>


                    </div> : ''}
                  <div className="mt-4">
                    <p className="font-medium text-sm">Colours</p>
                    <div className="grid grid-cols-4  mt-2 gap-1  ">
                      <ColourContainer title={"Black"} colourCode={"#EA9F54"} link="black"/>
                      <ColourContainer title={"Blue"} colourCode={"#683A2B"} link="blue" />
                      <ColourContainer title={"Bluegray"} colourCode={"#A9C9CA"} link="bluegray" />
                      <ColourContainer title={"Brown"} colourCode={"#75AE23"} link="brown" />
                      
                      <ColourContainer
                        title={"Charcoal"}
                        colourCode={"#AE6B3F"}
                        link="charcoal"
                      />
                      <ColourContainer title={"Forest"} colourCode={"#9C663E"} link="forest" />
                      <ColourContainer
                        title={"Gray"}
                        colourCode={"darkgreen"}
                        link="gray"
                      />
                      <ColourContainer title={"Green"} colourCode={"#39AA4E"} link="green" />
                      <ColourContainer title={"Lavender"} colourCode={"#C9D0EE"} link="lavender" />
                      <ColourContainer title={"Leather"} colourCode={"#F9D5BA"} link="leather" />
                      <ColourContainer title={"Maroon"} colourCode={"#F9D5BA"} link="maroon" />
                      <ColourContainer title={"Navy"} colourCode={"#D38B59"} link="navy"/>
                      <ColourContainer title={"Orange"} colourCode={"#3C5631"} link="orange"/>
                      <ColourContainer title={"Pink"} colourCode={"#BA8454"} link="pink" />
                      <ColourContainer title={"Purple"} colourCode={"#A79778"} link="purple" />
                      <ColourContainer title={"Red"} colourCode={"#88A26F"} link="red" />
                      <ColourContainer title={"Rose"} colourCode={"#88A26F"} link="rose" />
                      <ColourContainer title={"Sky"} colourCode={"#88A26F"} link="sky" />
                      <ColourContainer title={"Slate"} colourCode={"#88A26F"} link="slate" />
                      <ColourContainer title={"Tan"} colourCode={"#88A26F"} link="tan" />
                      <ColourContainer title={"Teal"} colourCode={"#88A26F"} link="teal" />
                      <ColourContainer title={"Walnut"} colourCode={"#88A26F"} link="walnut" />
                      <ColourContainer title={"White"} colourCode={"#88A26F"} link="white" />
                      <ColourContainer title={"Yellow"} colourCode={"#88A26F"} link="yellow" />
                    </div>
                  </div>
                 
                  </div> : ''}
    </div>
  )
}

export default PrebuiltDress