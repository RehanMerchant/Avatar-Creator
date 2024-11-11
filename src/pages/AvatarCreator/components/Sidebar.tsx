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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

interface ColourSelectProps {
  colour: string;
  colourcode: string;
}

const ColourSelect = ({ colour, colourcode }: ColourSelectProps) => {
  return (
    <div className="flex gap-2 text-white items-center">
      <div style={{ backgroundColor: colourcode }} className="w-8 h-4" />
      <p>{colour}</p>
    </div>
  );
};

const Sidebar = () => {
  const { setData, data } = useContext(MyContext)!;

  const handleChange = (value: string) => {
    setData({ ...data, tail_colour: value });
  };

  return (
    <aside className="h-screen w-[290px] bg-neutral-900 px-3 py-1 overflow-auto no-scrollbar">
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
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Tail</AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
                          <div className="flex flex-col gap-2">
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

                          {data.tail_type !== "none" ? (
                            <Select
                              defaultValue="ash"
                              onValueChange={handleChange}
                            >
                              <SelectTrigger className="w-[250px] ">
                                <SelectValue placeholder="Colour" />
                              </SelectTrigger>
                              <SelectContent className="bg-neutral-900 text-white">
                                <SelectItem value="ash">
                                  <ColourSelect
                                    colour="Ash"
                                    colourcode="#C18F8A"
                                  />
                                </SelectItem>
                                <SelectItem value="black">
                                  <ColourSelect
                                    colour="black"
                                    colourcode="#31313E"
                                  />
                                </SelectItem>
                                <SelectItem value="blonde">
                                  <ColourSelect
                                    colour="Blonde"
                                    colourcode="#E09E2B"
                                  />
                                </SelectItem>
                                <SelectItem value="blue">
                                  <ColourSelect
                                    colour="Blue"
                                    colourcode="#0074CB"
                                  />
                                </SelectItem>
                                <SelectItem value="carrot">
                                  <ColourSelect
                                    colour="Carrot"
                                    colourcode="#EC673E"
                                  />
                                </SelectItem>
                                <SelectItem value="chestnut">
                                  <ColourSelect
                                    colour="Chestnut"
                                    colourcode="#B6550E"
                                  />
                                </SelectItem>
                                <SelectItem value="dark_brown">
                                  <ColourSelect
                                    colour="Dark Brown"
                                    colourcode="#421603"
                                  />
                                </SelectItem>
                                <SelectItem value="dark_gray">
                                  <ColourSelect
                                    colour="Dark Gray"
                                    colourcode="#C1C1C1"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_black">
                                  <ColourSelect
                                    colour="Fur Black"
                                    colourcode="#1B2C36"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_brown">
                                  <ColourSelect
                                    colour="Fur Brown"
                                    colourcode="#624135"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_copper">
                                  <ColourSelect
                                    colour="Fur Copper"
                                    colourcode="#FAA301"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_gold">
                                  <ColourSelect
                                    colour="Fur Gold"
                                    colourcode="#FFE67D"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_grey">
                                  <ColourSelect
                                    colour="Fur Grey"
                                    colourcode="#909699"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_tan">
                                  <ColourSelect
                                    colour="Fur Tan"
                                    colourcode="#B88751"
                                  />
                                </SelectItem>
                                <SelectItem value="fur_white">
                                  <ColourSelect
                                    colour="Fur White"
                                    colourcode="#D8DCDC"
                                  />
                                </SelectItem>
                                <SelectItem value="ginger">
                                  <ColourSelect
                                    colour="Ginger"
                                    colourcode="#9C3B01"
                                  />
                                </SelectItem>
                                <SelectItem value="gold">
                                  <ColourSelect
                                    colour="Gold"
                                    colourcode="#FFA913"
                                  />
                                </SelectItem>
                                <SelectItem value="gray">
                                  <ColourSelect
                                    colour="Gray"
                                    colourcode="#D9D9D9"
                                  />
                                </SelectItem>
                                <SelectItem value="green">
                                  <ColourSelect
                                    colour="Green"
                                    colourcode="#007C00"
                                  />
                                </SelectItem>
                                <SelectItem value="light_brown">
                                  <ColourSelect
                                    colour="Light Brown"
                                    colourcode="#C88D58"
                                  />
                                </SelectItem>
                                <SelectItem value="navy">
                                  <ColourSelect
                                    colour="Navy"
                                    colourcode="#466AC9"
                                  />
                                </SelectItem>
                                <SelectItem value="orange">
                                  <ColourSelect
                                    colour="Orange"
                                    colourcode="#FF8A00"
                                  />
                                </SelectItem>
                                <SelectItem value="pink">
                                  <ColourSelect
                                    colour="Pink"
                                    colourcode="#E976C4"
                                  />
                                </SelectItem>
                                <SelectItem value="platinum">
                                  <ColourSelect
                                    colour="Platinum"
                                    colourcode="#C0AB81"
                                  />
                                </SelectItem>
                                <SelectItem value="purple">
                                  <ColourSelect
                                    colour="Purple"
                                    colourcode="#A966DD"
                                  />
                                </SelectItem>
                                <SelectItem value="raven">
                                  <ColourSelect
                                    colour="Raven"
                                    colourcode="#1A5369"
                                  />
                                </SelectItem>
                                <SelectItem value="red">
                                  <ColourSelect
                                    colour="Red"
                                    colourcode="#E21414"
                                  />
                                </SelectItem>
                                <SelectItem value="redhead">
                                  <ColourSelect
                                    colour="Redhead"
                                    colourcode="#C7341B"
                                  />
                                </SelectItem>
                                <SelectItem value="rose">
                                  <ColourSelect
                                    colour="Rose"
                                    colourcode="#FABBC6"
                                  />
                                </SelectItem>
                                <SelectItem value="sandy">
                                  <ColourSelect
                                    colour="Sandy"
                                    colourcode="#EDDC7E"
                                  />
                                </SelectItem>
                                <SelectItem value="strawberry">
                                  <ColourSelect
                                    colour="Strawberry"
                                    colourcode="#CCA000"
                                  />
                                </SelectItem>
                                <SelectItem value="violet">
                                  <ColourSelect
                                    colour="Violet"
                                    colourcode="#5662F3"
                                  />
                                </SelectItem>
                                <SelectItem value="white">
                                  <ColourSelect
                                    colour="White"
                                    colourcode="#D8DCDC"
                                  />
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          ) : (
                            ""
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                   { data.body_type!="child" ? <AccordionItem value="item-2">
                      <AccordionTrigger>Wings</AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
                        <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "none"}
                                onChange={() =>
                                  setData({ ...data, wings_type:"none" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">None</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "bat"}
                                onChange={() =>
                                  setData({ ...data, wings_type: "bat" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Bat</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "dragonfly"}
                                onChange={() =>
                                  setData({ ...data, wings_type: "dragonfly" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Dragonfly</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "feathered"}
                                onChange={() =>
                                  setData({ ...data, wings_type:"feathered" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Feathered</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "lizard"}
                                onChange={() =>
                                  setData({ ...data, wings_type: "lizard" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Lizard</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "lunar"}
                                onChange={() =>
                                  setData({ ...data, wings_type: "lunar" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Lunar</p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "monarch"}
                                onChange={() =>
                                  setData({ ...data, wings_type: "monarch" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Monarch</p>
                            </div>
                               <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_type === "pixie"}
                                onChange={() =>
                                  setData({ ...data, wings_type: "pixie" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Pixie</p>
                            </div>
                          </div>
                        {data.wings_type == "dragonfly" || data.wings_type=="pixie" ?
                          <div>
                            <p className="font-medium">Opacity</p>
                            <div className=" mt-3 flex flex-col gap-2">
                                
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_opacity === "solid"}
                                onChange={() =>
                                  setData({ ...data, wings_opacity:"solid" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Solid</p>
                            </div>


                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                checked={data.wings_opacity === "transparent"}
                                onChange={() =>
                                  setData({ ...data, wings_opacity: "transparent" })
                                }
                                className="size-4"
                              />
                              <p className="font-medium">Transparent</p>
                            </div>

                            </div>
                          </div>:''}


                        </div>
                        </AccordionContent>
                        </AccordionItem> : ''}
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
