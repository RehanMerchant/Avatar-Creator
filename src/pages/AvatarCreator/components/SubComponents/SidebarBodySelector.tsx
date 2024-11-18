import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import ChildBaseImage from "/assets/base_asset/child.png";
import MaleBaseImage from "/assets/base_asset/male.png";
import FemaleBaseImage from "/assets/base_asset/female.png";
import TeenBaseImage from "/assets/base_asset/teen.png";
import PreganantBaseImage from "/assets/base_asset/pregnant.png";
import MascularBaseImage from "/assets/base_asset/muscular.png";
import { cn } from "@/lib/utils";

const SidebarBodySelector = () => {
    interface AvatarOptionsBoxProps {
        title: string;
        image: any;
      }
      
      const AvatarOptionsBox = ({ title, image }: AvatarOptionsBoxProps) => {
        const { setData, data } = useContext(MyContext)!;
        return (
          <div
            onClick={() => {
              setData({ ...data, body_type:title,head_type:"",prosthesis:"none", wings_type:"none",custom_head:"",nose:"none", hair_type:"none", eyebrow:"none", much:"none", beard:"none"});
            }}
            className="flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <div
              className={cn(
                "h-[64px] w-[64px]  hover:border-white transition-all border-4 rounded-md border-neutral-800",
                data.body_type == title ? "border-white" : ""
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
              setData({ ...data, body_colour: link });
            }}
            className={cn(
              "flex flex-col items-center justify-center  cursor-pointer  hover:border-white transition-all border-[3px] border-neutral-900 pt-2 rounded-sm",
              data.body_colour == link ? "border-white" : ""
            )}
          >
            <div style={{ backgroundColor: colourCode }} className="w-7 h-3.5" />
            <p className="text-[12px] select-none  ">{title}</p>
          </div>
        );
      };
  return (
               <div className="w-full">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"child"}
                          image={ChildBaseImage}
                        />
                        <AvatarOptionsBox
                          title={"female"}
                          image={FemaleBaseImage}
                        />
                        <AvatarOptionsBox
                          title={"male"}
                          image={MaleBaseImage}
                        />
                      </CarouselItem>

                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"muscular"}
                          image={MascularBaseImage}
                        />
                        <AvatarOptionsBox
                          title={"pregnant"}
                          image={PreganantBaseImage}
                        />
                        <AvatarOptionsBox
                          title={"teen"}
                          image={TeenBaseImage}
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
                  <div className="mt-4">
                    <p className="font-medium text-sm">Colours</p>
                    <div className="grid grid-cols-4  mt-2 gap-1  ">
                      <ColourContainer title={"Amber"} colourCode={"#EA9F54"} link="amber"/>
                      <ColourContainer title={"Dark"} colourCode={"#683A2B"} link="black" />
                      <ColourContainer title={"Blue"} colourCode={"#A9C9CA"} link="blue" />
                      <ColourContainer title={"Green1"} colourCode={"#75AE23"} link="bright_green" />
                      
                      <ColourContainer
                        title={"Bronze"}
                        colourCode={"#AE6B3F"}
                        link="bronze"
                      />
                      <ColourContainer title={"Brown1"} colourCode={"#9C663E"} link="brown" />
                      <ColourContainer
                        title={"Green2"}
                        colourCode={"darkgreen"}
                        link="dark_green"
                      />
                       <ColourContainer title={"Black2"} colourCode={"black"} link="fur_black" />
                      <ColourContainer title={"Brown2"} colourCode={"#603429"} link="fur_brown" />
                      <ColourContainer title={"Copper"} colourCode={"#603429"} link="fur_copper" />
                      <ColourContainer title={"Gold"} colourCode={"#E09E2B"} link="fur_gold" />
                      <ColourContainer title={"Grey"} colourCode={"#909699"} link="fur_grey" />
                      <ColourContainer title={"Tan"} colourCode={"#B88751"} link="fur_tan" />
                      <ColourContainer title={"White"} colourCode={"white"} link="fur_white" />
                      <ColourContainer title={"Green3"} colourCode={"#39AA4E"} link="green" />
                      <ColourContainer title={"Lavender"} colourCode={"#C9D0EE"} link="lavender" />
                      <ColourContainer title={"Light"} colourCode={"#F9D5BA"} link="light" />
                      <ColourContainer title={"Olive"} colourCode={"#D38B59"} link="olive"/>
                      <ColourContainer title={"Green4"} colourCode={"#3C5631"} link="pale_green"/>
                      <ColourContainer title={"Taupe"} colourCode={"#BA8454"} link="taupe" />
                      <ColourContainer title={"Zombie"} colourCode={"#A79778"} link="zombie" />
                      <ColourContainer title={"Green5"} colourCode={"#88A26F"} link="zombie_green" />
                    </div>
                  </div>
                </div>
  )
}

export default SidebarBodySelector