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
    bodytype: string;
  }

  const AvatarOptionsBox = ({
    title,
    image,
    bodytype,
  }: AvatarOptionsBoxProps) => {
    const { setData, data } = useContext(MyContext)!;
    return (
      <div
        onClick={() => {
          setData({
            ...data,
            dress_type: "Prebuilt",
            body_type: bodytype,
            dress: title,
            dress_colour: "blue",
          });
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
    link: string;
  }

  const ColourContainer = ({
    colourCode,
    title,
    link,
  }: ColourContainerProps) => {
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
      {data.body_type == "female" || data.body_type == "teen" ? (
        <div>
          <p className="pt-3 pb-4 font-medium">Female</p>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="flex md:justify-center md:gap-4 justify-around">
                <AvatarOptionsBox title={"none"} image={""} bodytype="female" />
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
          {data.dress == "kimono" || data.dress == "kimono_split" ? (
            <div className="mt-4 flex flex-col gap-2">
              <p className="pb-1 font-medium">Edit Kimono</p>

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
            </div>
          ) : (
            ""
          )}
          <div className="mt-4">
            <p className="font-medium text-sm">Colours</p>
            <div className="grid grid-cols-4  mt-2 gap-1  ">
              <ColourContainer
                title={"Black"}
                colourCode={"black"}
                link="black"
              />
              <ColourContainer
                title={"Blue"}
                colourCode={"#466AC9"}
                link="blue"
              />
              <ColourContainer
                title={"Bluegray"}
                colourCode={"#557E85"}
                link="bluegray"
              />
              <ColourContainer
                title={"Brown"}
                colourCode={"#62351C"}
                link="brown"
              />

              <ColourContainer
                title={"Charcoal"}
                colourCode={"#2A3034"}
                link="charcoal"
              />
              <ColourContainer
                title={"Forest"}
                colourCode={"#1B5502"}
                link="forest"
              />
              <ColourContainer
                title={"Gray"}
                colourCode={"#585561"}
                link="gray"
              />
              <ColourContainer
                title={"Green"}
                colourCode={"#39AA4E"}
                link="green"
              />
              <ColourContainer
                title={"Lavender"}
                colourCode={"#C9D0EE"}
                link="lavender"
              />
              <ColourContainer
                title={"Leather"}
                colourCode={"#704325"}
                link="leather"
              />
              <ColourContainer
                title={"Maroon"}
                colourCode={"#832121"}
                link="maroon"
              />
              <ColourContainer
                title={"Navy"}
                colourCode={"#20102B"}
                link="navy"
              />
              <ColourContainer
                title={"Orange"}
                colourCode={"#D75B1A"}
                link="orange"
              />
              <ColourContainer
                title={"Pink"}
                colourCode={"#E08080"}
                link="pink"
              />
              <ColourContainer
                title={"Purple"}
                colourCode={"#411357"}
                link="purple"
              />
              <ColourContainer
                title={"Red"}
                colourCode={"#82171C"}
                link="red"
              />
              <ColourContainer
                title={"Rose"}
                colourCode={"#77372B"}
                link="rose"
              />
              <ColourContainer
                title={"Sky"}
                colourCode={"#C6EEFD"}
                link="sky"
              />
              <ColourContainer
                title={"Slate"}
                colourCode={"#818B8B"}
                link="slate"
              />
              <ColourContainer
                title={"Tan"}
                colourCode={"#CFC587"}
                link="tan"
              />
              <ColourContainer
                title={"Teal"}
                colourCode={"#0E4E72"}
                link="teal"
              />
              <ColourContainer
                title={"Walnut"}
                colourCode={"#9A6F37"}
                link="walnut"
              />
              <ColourContainer
                title={"White"}
                colourCode={"#FFFFFF"}
                link="white"
              />
              <ColourContainer
                title={"Yellow"}
                colourCode={"#F3C03F"}
                link="yellow"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PrebuiltDress;
