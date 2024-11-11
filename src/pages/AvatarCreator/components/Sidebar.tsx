import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ChildBaseImage from "@/assets/base_asset/child.png";
import MaleBaseImage from "@/assets/base_asset/male.png";
import FemaleBaseImage from "@/assets/base_asset/female.png";
import TeenBaseImage from "@/assets/base_asset/teen.png";
import PreganantBaseImage from "@/assets/base_asset/pregnant.png";
import MascularBaseImage from "@/assets/base_asset/muscular.png";
import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import { cn } from "@/lib/utils";

interface ColourContainerProps {
  colourCode: any;
  title: string;
}

const ColourContainer = ({ colourCode, title }: ColourContainerProps) => {
  const { setData, data } = useContext(MyContext)!;
  return (
    <div
      onClick={() => {
        setData({ ...data, body_colour: title });
      }}
      className={cn(
        "flex flex-col items-center justify-center  cursor-pointer  hover:border-white transition-all border-[3px] border-neutral-900 pt-2 rounded-sm",
        data.body_colour == title ? "border-white" : ""
      )}
    >
      <div style={{ backgroundColor: colourCode }} className="w-7 h-3.5" />
      <p className="text-[12px] select-none capitalize ">{title}</p>
    </div>
  );
};

interface AvatarOptionsBoxProps {
  title: string;
  image: any;
}

const AvatarOptionsBox = ({ title, image }: AvatarOptionsBoxProps) => {
  const { setData, data } = useContext(MyContext)!;
  return (
    <div
      onClick={() => {
        setData({ ...data, body_type: title, head_type: "" });
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

const Sidebar = () => {
  const { setData, data } = useContext(MyContext)!;
  return (
    <aside className="h-screen w-[290px] bg-neutral-900 px-3 py-1">
      <div className="w-full h-auto py-1">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="body_type">
            <AccordionTrigger>Body Type</AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 flex flex-col gap-5">
                <div className="w-full">
                  <Carousel className="max-w-sm">
                    <CarouselContent>
                      <CarouselItem className="flex justify-center gap-4">
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

                      <CarouselItem className="flex justify-center gap-4">
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
                    <div className="grid grid-cols-5  mt-2 gap-2  ">
                      <ColourContainer title={"amber"} colourCode={"#EA9F54"} />
                      <ColourContainer title={"black"} colourCode={"#0D1621"} />
                      <ColourContainer title={"blue"} colourCode={"#A9C9CA"} />
                      <ColourContainer
                        title={"bronze"}
                        colourCode={"#AE6B3F"}
                      />
                      <ColourContainer title={"brown"} colourCode={"#9C663E"} />
                      <ColourContainer
                        title={"copper"}
                        colourCode={"#FAA301"}
                      />
                      <ColourContainer title={"dark"} colourCode={"#603429"} />
                      <ColourContainer title={"gold"} colourCode={"#E09E2B"} />
                      <ColourContainer title={"green"} colourCode={"#39AA4E"} />
                      <ColourContainer title={"grey"} colourCode={"#909699"} />
                      <ColourContainer title={"light"} colourCode={"#F9D5BA"} />
                      <ColourContainer title={"tan"} colourCode={"#B88751"} />
                      <ColourContainer title={"white"} colourCode={"#B8BBBC"} />
                      <ColourContainer
                        title={"lavender"}
                        colourCode={"#C9D0EE"}
                      />
                      <ColourContainer title={"olive"} colourCode={"#D38B59"} />
                      <ColourContainer title={"taupe"} colourCode={"#BA8454"} />
                    </div>
                  </div>
                </div>

                <div className="w-full">

                  {data.body_type == "child" || data.body_type == "teen" ? (
                    ""
                  ) : (
                    <div className="">
                      <p className="font-medium text-sm">Head Features</p>

                      <div className="mt-3 w-fit h-auto flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            checked={data.head_type === "elderly"}
                            onChange={() =>
                              setData({ ...data, head_type: "elderly" })
                            }
                            className="size-4"
                          />
                          <p className="font-medium">Elderly Head</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            checked={data.head_type === "small"}
                            onChange={() =>
                              setData({ ...data, head_type: "small" })
                            }
                            className="size-4"
                          />
                          <p className="font-medium">Small Head</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                <div className="w-full">


                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" >
                      <AccordionTrigger>Tail</AccordionTrigger>
                      <AccordionContent>

                        <div className="mt-1 w-fit h-auto flex flex-col gap-2">
                          <div className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              checked={data.tail_type === "none"}
                              onChange={() =>
                                setData({ ...data, tail_type: "none" })
                              }
                              className="size-4"
                            />
                            <p className="font-medium">None</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              checked={data.tail_type === "cat"}
                              onChange={() =>
                                setData({ ...data, tail_type: "cat" })
                              }
                              className="size-4"
                            />
                            <p className="font-medium">Cat</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              checked={data.tail_type === "fluffy"}
                              onChange={() =>
                                setData({ ...data, tail_type: "fluffy" })
                              }
                              className="size-4"
                            />
                            <p className="font-medium">Fluffy</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              checked={data.tail_type === "lizard"}
                              onChange={() =>
                                setData({ ...data, tail_type: "lizard" })
                              }
                              className="size-4"
                            />
                            <p className="font-medium">Lizard</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              checked={data.tail_type === "wolf"}
                              onChange={() =>
                                setData({ ...data, tail_type: "wolf" })
                              }
                              className="size-4"
                            />
                            <p className="font-medium">Wolf</p>
                          </div>
                        </div>

                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>




                </div>


              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};

export default Sidebar;
