import { MyContext } from "@/context/AvatarDataContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";


  import Alien from "/assets/base_asset/head/alien.png"
  import Boarman from "/assets/base_asset/head/boarman.png"
  import Zombie from "/assets/base_asset/head/zombie.png"
  import Goblin from "/assets/base_asset/head/goblin.png"
  import Skeleton from "/assets/base_asset/head/skeleton.png"
  import Jack from "/assets/base_asset/head/jack.png"
  import Lizard from "/assets/base_asset/head/lizard.png"
  import Minotaur from "/assets/base_asset/head/minotaur.png"
  import Mouse from "/assets/base_asset/head/mouse.png"
  import Orc from "/assets/base_asset/head/orc.png"
  import Pig from "/assets/base_asset/head/pig.png"
  import Rabbit from "/assets/base_asset/head/rabbit.png"
  import Rat from "/assets/base_asset/head/rat.png"
  import Sheep from "/assets/base_asset/head/sheep.png"
  import Troll from "/assets/base_asset/head/troll.png"
  import Vampire from "/assets/base_asset/head/vampire.png"
  import Wartotaur from "/assets/base_asset/head/wartotaur.png"
  import Wolf from "/assets/base_asset/head/wolf.png"

export const SidebarCustomHead = () => {
    const { data } = useContext(MyContext)!;
    interface AvatarOptionsBoxProps {
        title: string;
        image: any;
      }
      
      const AvatarOptionsBox = ({ title, image }: AvatarOptionsBoxProps) => {
        const { setData, data } = useContext(MyContext)!;
        return (
          <div
            onClick={() => {
              setData({ ...data, head_type: "custom", custom_head:title, nose:"none",hair_type:"none", ear_type:"none" });
            }}
            className="flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <div
              className={cn(
                "h-[64px] w-[64px]  hover:border-white transition-all border-4 rounded-md border-neutral-800",
                data.custom_head == title ? "border-white" : ""
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


  return (
    <div className="w-full">
        <p className="font-semibold">Custom Head</p>
        <Carousel className="w-full mt-4">
                    <CarouselContent>
                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">

                      <AvatarOptionsBox
                          title={"sheep"}
                          image={Sheep}
                        />

                        <AvatarOptionsBox
                          title={"boarman"}
                          image={Boarman}
                        />
                       
                         <AvatarOptionsBox
                          title={"wolf"}
                          image={Wolf}
                        />
                      </CarouselItem>

                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"goblin"}
                          image={Goblin}
                        />
                       
                       <AvatarOptionsBox
                          title={"troll"}
                          image={Troll}
                        />
                        <AvatarOptionsBox
                          title={"lizard"}
                          image={Lizard}
                        />
                      </CarouselItem>
                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"minotaur"}
                          image={Minotaur}
                        />
                        <AvatarOptionsBox
                          title={"mouse"}
                          image={Mouse}
                        />
                        <AvatarOptionsBox
                          title={"orc"}
                          image={Orc}
                        />
                      </CarouselItem>
                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"pig"}
                          image={Pig}
                        />
                        <AvatarOptionsBox
                          title={"rabbit"}
                          image={Rabbit}
                        />
                        <AvatarOptionsBox
                          title={"rat"}
                          image={Rat}
                        />
                      </CarouselItem>
                      {data.body_type!="child" &&
                      <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                  
                         <AvatarOptionsBox
                          title={"zombie"}
                          image={Zombie}
                        />
                     
                      <AvatarOptionsBox
                          title={"jack"}
                          image={Jack}
                        />
                        <AvatarOptionsBox
                          title={"skeleton"}
                          image={Skeleton}
                        />
                      </CarouselItem>}
                      
                      {data.body_type!="child" &&
                        <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                        <AvatarOptionsBox
                          title={"vampire"}
                          image={Vampire}
                        />
                        <AvatarOptionsBox
                          title={"wartotaur"}
                          image={Wartotaur}
                        />
                           <AvatarOptionsBox
                          title={"alien"}
                          image={Alien}
                        />
                       
                      </CarouselItem>
                       }   
                    
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

    </div>
  )
}
