import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ChildBaseImage from "/public/assets/base_asset/child.png";
import MaleBaseImage from "/public/assets/base_asset/male.png";
import FemaleBaseImage from "/public/assets/base_asset/female.png";
import TeenBaseImage from "/public/assets/base_asset/teen.png";
import PreganantBaseImage from "/public/assets/base_asset/pregnant.png";
import MascularBaseImage from "/public/assets/base_asset/muscular.png";
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
import { ArrowBigDown } from "lucide-react";

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

interface AvatarOptionsBoxProps {
  title: string;
  image: any;
}

const AvatarOptionsBox = ({ title, image }: AvatarOptionsBoxProps) => {
  const { setData, data } = useContext(MyContext)!;
  return (
    <div
      onClick={() => {
        setData({ ...data, body_type:title, head_type: "", prosthesis:"none",wings_type:"none" });
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

interface ColourPickProps {
  label: string;
  color: string;
  link: string;
}

const ColourPick = ({ label, color, link }: ColourPickProps) => {
  const { setData, data } = useContext(MyContext)!;
  return (
    <div
      onClick={() => {
        setData({ ...data, wings_colour: link });
      }}
      className={cn(
        "flex items-center p-1.5 gap-1 rounded-sm hover:bg-neutral-900 cursor-pointer",
        data.wings_colour == link ? "border-2" : ""
      )}
    >
      <div style={{ backgroundColor: color }} className="h-3 w-6" />
      <p className="text-xs">{label}</p>
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
                      <ColourContainer title={"Light"} colourCode={"#F9D5BA"} link="Light" />
                      <ColourContainer title={"Olive"} colourCode={"#D38B59"} link="olive"/>
                      <ColourContainer title={"Green4"} colourCode={"#3C5631"} link="pale_green"/>
                      <ColourContainer title={"Taupe"} colourCode={"#BA8454"} link="taupe" />
                      <ColourContainer title={"Zombie"} colourCode={"#A79778"} link="zombie" />
                      <ColourContainer title={"Green5"} colourCode={"#88A26F"} link="zombie_green" />
                    </div>
                  </div>
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
                    {data.body_type != "child" ? (
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Wings</AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
                            <div className="flex flex-col gap-2">
                              <div>
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "none"}
                                    onChange={() =>
                                      setData({ ...data, wings_type: "none" })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">None</p>
                                </div>
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "bat"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "bat",
                                        wings_colour: "amber",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Bat</p>
                                </div>
                                {data.wings_type == "bat" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#e68b40"
                                            label="Amber"
                                            link="amber"
                                          />
                                          <ColourPick
                                            color="#5b4c75"
                                            label="Ash"
                                            link="ash"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="#d1942a"
                                            label="Blonde"
                                            link="blonde"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#324b78"
                                            label="Blue Gray"
                                            link="bluegray"
                                          />
                                          <ColourPick
                                            color="#50b564"
                                            label="Bright Green"
                                            link="bright_green"
                                          />
                                          <ColourPick
                                            color="#543d31"
                                            label="Bronze"
                                            link="bronze"
                                          />
                                          <ColourPick
                                            color="#3b2d26"
                                            label="Brown"
                                            link="brown"
                                          />
                                          <ColourPick
                                            color="#e6663c"
                                            label="Carrot"
                                            link="carrot"
                                          />
                                          <ColourPick
                                            color="#141312"
                                            label="Charcoal"
                                            link="charcoal"
                                          />
                                          <ColourPick
                                            color="#613624"
                                            label="Chestnut"
                                            link="chestnut"
                                          />
                                          <ColourPick
                                            color="#261c17"
                                            label="Dark Brown"
                                            link="dark_brown"
                                          />
                                          <ColourPick
                                            color="#2e2e2e"
                                            label="Dark Gray"
                                            link="dark_gray"
                                          />
                                          <ColourPick
                                            color="#125e22"
                                            label="Dark Green"
                                            link="dark_green"
                                          />
                                          <ColourPick
                                            color="#08300a"
                                            label="Forest"
                                            link="forest"
                                          />
                                          <ColourPick
                                            color="#070807"
                                            label="Fur Black"
                                            link="fur_black"
                                          />
                                          <ColourPick
                                            color="#140604"
                                            label="Fur Brown"
                                            link="fur_brown"
                                          />
                                          <ColourPick
                                            color="#a37512"
                                            label="Fur Copper"
                                            link="fur_copper"
                                          />
                                          <ColourPick
                                            color="#cc8f0c"
                                            label="Fur Gold"
                                            link="fur_gold"
                                          />
                                          <ColourPick
                                            color="#3b3a39"
                                            label="Fur Grey"
                                            link="fur_grey"
                                          />
                                          <ColourPick
                                            color="#785c31"
                                            label="Tan"
                                            link="fur_tan"
                                          />
                                          <ColourPick
                                            color="#e6e4e1"
                                            label="Fur White"
                                            link="fur_white"
                                          />
                                          <ColourPick
                                            color="#ab6b0a"
                                            label="Ginger"
                                            link="ginger"
                                          />
                                          <ColourPick
                                            color="#deb514"
                                            label="Gold"
                                            link="gold"
                                          />
                                          <ColourPick
                                            color="#757575"
                                            label="Gray"
                                            link="gray"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#a08aa6"
                                            label="Lavender"
                                            link="lavender"
                                          />
                                          <ColourPick
                                            color="#0d0502"
                                            label="Leather"
                                            link="leather"
                                          />
                                          <ColourPick
                                            color="#705a51"
                                            label="Light"
                                            link="light"
                                          />
                                          <ColourPick
                                            color="#66483b"
                                            label="Light Brown"
                                            link="light_brown"
                                          />
                                          <ColourPick
                                            color="#1f0d29"
                                            label="Maroon"
                                            link="maroon"
                                          />
                                          <ColourPick
                                            color="#2f4594"
                                            label="Navy"
                                            link="navy"
                                          />
                                          <ColourPick
                                            color="#47301f"
                                            label="Olive"
                                            link="olive"
                                          />
                                          <ColourPick
                                            color="#ab561a"
                                            label="Orange"
                                            link="orange"
                                          />
                                          <ColourPick
                                            color="#72995d"
                                            label="Pale Green"
                                            link="pale_green"
                                          />
                                          <ColourPick
                                            color="#ba20b2"
                                            label="Pink"
                                            link="pink"
                                          />
                                          <ColourPick
                                            color="#bdafba"
                                            label="Platinum"
                                            link="platinum"
                                          />
                                          <ColourPick
                                            color="#842dcc"
                                            label="Purple"
                                            link="purple"
                                          />
                                          <ColourPick
                                            color="#0f3a59"
                                            label="Raven"
                                            link="raven"
                                          />
                                          <ColourPick
                                            color="red"
                                            label="Red"
                                            link="red"
                                          />
                                          <ColourPick
                                            color="#ab4646"
                                            label="Redhead"
                                            link="redhead"
                                          />
                                          <ColourPick
                                            color="#ad4b8b"
                                            label="Rose"
                                            link="rose"
                                          />
                                          <ColourPick
                                            color="#c9c381"
                                            label="Sandy"
                                            link="sandy"
                                          />
                                          <ColourPick
                                            color="#6cc3d9"
                                            label="Sky"
                                            link="sky"
                                          />
                                          <ColourPick
                                            color="#394042"
                                            label="Slate"
                                            link="slate"
                                          />
                                          <ColourPick
                                            color="#b8b528"
                                            label="Strawberry"
                                            link="strawberry"
                                          />
                                          <ColourPick
                                            color="#7a5725"
                                            label="Tan"
                                            link="tan"
                                          />
                                          <ColourPick
                                            color="#543b18"
                                            label="Taupe"
                                            link="taupe"
                                          />
                                          <ColourPick
                                            color="#245161"
                                            label="Teal"
                                            link="teal"
                                          />
                                          <ColourPick
                                            color="#1e2082"
                                            label="Voilet"
                                            link="violet"
                                          />
                                          <ColourPick
                                            color="#423426"
                                            label="Walnut"
                                            link="walnut"
                                          />
                                          <ColourPick
                                            color="white"
                                            label="White"
                                            link="white"
                                          />
                                          <ColourPick
                                            color="#c99d0a"
                                            label="Yellow"
                                            link="yellow"
                                          />
                                          <ColourPick
                                            color="#586150"
                                            label="Zombie"
                                            link="zombie"
                                          />
                                          <ColourPick
                                            color="#8c9e7d"
                                            label="Zombie Green"
                                            link="zombie_green"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "dragonfly"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "dragonfly",
                                        wings_colour: "amber",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Dragonfly</p>
                                </div>
                                {data.wings_type == "dragonfly" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#e68b40"
                                            label="Amber"
                                            link="amber"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#324b78"
                                            label="Blue Gray"
                                            link="bluegray"
                                          />
                                          <ColourPick
                                            color="#50b564"
                                            label="Bright Green"
                                            link="bright_green"
                                          />
                                          <ColourPick
                                            color="#543d31"
                                            label="Bronze"
                                            link="bronze"
                                          />
                                          <ColourPick
                                            color="#3b2d26"
                                            label="Brown"
                                            link="brown"
                                          />
                                          <ColourPick
                                            color="#261c17"
                                            label="Ceramic"
                                            link="ceramic"
                                          />
                                          <ColourPick
                                            color="#7AD7F0"
                                            label="Dragonfly"
                                            link="dragonfly"
                                          />
                                          <ColourPick
                                            color="#08300a"
                                            label="Forest"
                                            link="forest"
                                          />
                                          <ColourPick
                                            color="#DC6F35"
                                            label="Gold"
                                            link="gold"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#343043"
                                            label="Iron"
                                            link="iron"
                                          />
                                          <ColourPick
                                            color="#a08aa6"
                                            label="Lavender"
                                            link="lavender"
                                          />
                                          <ColourPick
                                            color="#E4A47C"
                                            label="Light"
                                            link="light"
                                          />
                                          <ColourPick
                                            color="#AE424A"
                                            label="Maroon"
                                            link="maroon"
                                          />
                                          <ColourPick
                                            color="#2f4594"
                                            label="Navy"
                                            link="navy"
                                          />
                                          <ColourPick
                                            color="#ab561a"
                                            label="Orange"
                                            link="orange"
                                          />
                                          <ColourPick
                                            color="#72995d"
                                            label="Pale Green"
                                            link="pale_green"
                                          />
                                          <ColourPick
                                            color="#E08080"
                                            label="Pink"
                                            link="pink"
                                          />
                                          <ColourPick
                                            color="#842dcc"
                                            label="Purple"
                                            link="purple"
                                          />
                                          <ColourPick
                                            color="red"
                                            label="Red"
                                            link="red"
                                          />
                                          <ColourPick
                                            color="#B05F3C"
                                            label="Rose"
                                            link="rose"
                                          />
                                          <ColourPick
                                            color="#394042"
                                            label="Silver"
                                            link="silver"
                                          />
                                          <ColourPick
                                            color="#B9E3F7"
                                            label="Sky"
                                            link="sky"
                                          />
                                          <ColourPick
                                            color="#245161"
                                            label="Teal"
                                            link="teal"
                                          />
                                          <ColourPick
                                            color="white"
                                            label="White"
                                            link="white"
                                          />
                                          <ColourPick
                                            color="#c99d0a"
                                            label="Yellow"
                                            link="yellow"
                                          />
                                          <ColourPick
                                            color="#8c9e7d"
                                            label="Zombie Green"
                                            link="zombie_green"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "feathered"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "feathered",
                                        wings_colour: "ash",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Feathered</p>
                                </div>
                                {data.wings_type == "feathered" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#FFF1C1"
                                            label="Ash"
                                            link="ash"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="#d1942a"
                                            label="Blonde"
                                            link="blonde"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#e6663c"
                                            label="Carrot"
                                            link="carrot"
                                          />
                                          <ColourPick
                                            color="#613624"
                                            label="Chestnut"
                                            link="chestnut"
                                          />
                                          <ColourPick
                                            color="#261c17"
                                            label="Dark Brown"
                                            link="dark_brown"
                                          />
                                          <ColourPick
                                            color="#2e2e2e"
                                            label="Dark Gray"
                                            link="dark_gray"
                                          />
                                          <ColourPick
                                            color="#070807"
                                            label="Fur Black"
                                            link="fur_black"
                                          />
                                          <ColourPick
                                            color="#140604"
                                            label="Fur Brown"
                                            link="fur_brown"
                                          />
                                          <ColourPick
                                            color="#a37512"
                                            label="Fur Copper"
                                            link="fur_copper"
                                          />
                                          <ColourPick
                                            color="#cc8f0c"
                                            label="Fur Gold"
                                            link="fur_gold"
                                          />
                                          <ColourPick
                                            color="#3b3a39"
                                            label="Fur Grey"
                                            link="fur_grey"
                                          />
                                          <ColourPick
                                            color="#785c31"
                                            label="Tan"
                                            link="fur_tan"
                                          />
                                          <ColourPick
                                            color="#e6e4e1"
                                            label="Fur White"
                                            link="fur_white"
                                          />
                                          <ColourPick
                                            color="#ab6b0a"
                                            label="Ginger"
                                            link="ginger"
                                          />
                                          <ColourPick
                                            color="#deb514"
                                            label="Gold"
                                            link="gold"
                                          />
                                          <ColourPick
                                            color="#757575"
                                            label="Gray"
                                            link="gray"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#66483b"
                                            label="Light Brown"
                                            link="light_brown"
                                          />
                                          <ColourPick
                                            color="#ab561a"
                                            label="Orange"
                                            link="orange"
                                          />
                                          <ColourPick
                                            color="#ba20b2"
                                            label="Pink"
                                            link="pink"
                                          />
                                          <ColourPick
                                            color="#bdafba"
                                            label="Platinum"
                                            link="platinum"
                                          />
                                          <ColourPick
                                            color="#842dcc"
                                            label="Purple"
                                            link="purple"
                                          />
                                          <ColourPick
                                            color="#0f3a59"
                                            label="Raven"
                                            link="raven"
                                          />
                                          <ColourPick
                                            color="red"
                                            label="Red"
                                            link="red"
                                          />
                                          <ColourPick
                                            color="#ab4646"
                                            label="Redhead"
                                            link="redhead"
                                          />
                                          <ColourPick
                                            color="#ad4b8b"
                                            label="Rose"
                                            link="rose"
                                          />
                                          <ColourPick
                                            color="#c9c381"
                                            label="Sandy"
                                            link="sandy"
                                          />
                                          <ColourPick
                                            color="#b8b528"
                                            label="Strawberry"
                                            link="strawberry"
                                          />
                                          <ColourPick
                                            color="white"
                                            label="White"
                                            link="white"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "lizard"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "lizard",
                                        wings_colour: "amber",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Lizard</p>
                                </div>
                                {data.wings_type == "lizard" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#e68b40"
                                            label="Amber"
                                            link="amber"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#50b564"
                                            label="Bright Green"
                                            link="bright_green"
                                          />
                                          <ColourPick
                                            color="#543d31"
                                            label="Bronze"
                                            link="bronze"
                                          />
                                          <ColourPick
                                            color="#3b2d26"
                                            label="Brown"
                                            link="brown"
                                          />
                                          <ColourPick
                                            color="#125e22"
                                            label="Dark Green"
                                            link="dark_green"
                                          />
                                          <ColourPick
                                            color="#070807"
                                            label="Fur Black"
                                            link="fur_black"
                                          />
                                          <ColourPick
                                            color="#140604"
                                            label="Fur Brown"
                                            link="fur_brown"
                                          />
                                          <ColourPick
                                            color="#a37512"
                                            label="Fur Copper"
                                            link="fur_copper"
                                          />
                                          <ColourPick
                                            color="#cc8f0c"
                                            label="Fur Gold"
                                            link="fur_gold"
                                          />
                                          <ColourPick
                                            color="#3b3a39"
                                            label="Fur Grey"
                                            link="fur_grey"
                                          />
                                          <ColourPick
                                            color="#785c31"
                                            label="Tan"
                                            link="fur_tan"
                                          />
                                          <ColourPick
                                            color="#e6e4e1"
                                            label="Fur White"
                                            link="fur_white"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#a08aa6"
                                            label="Lavender"
                                            link="lavender"
                                          />
                                          <ColourPick
                                            color="#705a51"
                                            label="Light"
                                            link="light"
                                          />
                                          <ColourPick
                                            color="#47301f"
                                            label="Olive"
                                            link="olive"
                                          />
                                          <ColourPick
                                            color="#72995d"
                                            label="Pale Green"
                                            link="pale_green"
                                          />
                                          <ColourPick
                                            color="#543b18"
                                            label="Taupe"
                                            link="taupe"
                                          />
                                          <ColourPick
                                            color="#586150"
                                            label="Zombie"
                                            link="zombie"
                                          />
                                          <ColourPick
                                            color="#8c9e7d"
                                            label="Zombie Green"
                                            link="zombie_green"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "lunar"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "lunar",
                                        wings_colour: "amber",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Lunar</p>
                                </div>
                                {data.wings_type == "lunar" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#e68b40"
                                            label="Amber"
                                            link="amber"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#324b78"
                                            label="Blue Gray"
                                            link="bluegray"
                                          />
                                          <ColourPick
                                            color="#50b564"
                                            label="Bright Green"
                                            link="bright_green"
                                          />
                                          <ColourPick
                                            color="#543d31"
                                            label="Bronze"
                                            link="bronze"
                                          />
                                          <ColourPick
                                            color="#3b2d26"
                                            label="Brown"
                                            link="brown"
                                          />
                                          <ColourPick
                                            color="#261c17"
                                            label="Ceramic"
                                            link="ceramic"
                                          />
                                          <ColourPick
                                            color="#08300a"
                                            label="Forest"
                                            link="forest"
                                          />
                                          <ColourPick
                                            color="#DC6F35"
                                            label="Gold"
                                            link="gold"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#343043"
                                            label="Iron"
                                            link="iron"
                                          />
                                          <ColourPick
                                            color="#a08aa6"
                                            label="Lavender"
                                            link="lavender"
                                          />
                                          <ColourPick
                                            color="#E4A47C"
                                            label="Light"
                                            link="light"
                                          />
                                          <ColourPick
                                            color="#E4A47C"
                                            label="Lunar"
                                            link="lunar"
                                          />
                                          <ColourPick
                                            color="#AE424A"
                                            label="Maroon"
                                            link="maroon"
                                          />
                                          <ColourPick
                                            color="#2f4594"
                                            label="Navy"
                                            link="navy"
                                          />
                                          <ColourPick
                                            color="#ab561a"
                                            label="Orange"
                                            link="orange"
                                          />
                                          <ColourPick
                                            color="#72995d"
                                            label="Pale Green"
                                            link="pale_green"
                                          />
                                          <ColourPick
                                            color="#E08080"
                                            label="Pink"
                                            link="pink"
                                          />
                                          <ColourPick
                                            color="#842dcc"
                                            label="Purple"
                                            link="purple"
                                          />
                                          <ColourPick
                                            color="red"
                                            label="Red"
                                            link="red"
                                          />
                                          <ColourPick
                                            color="#B05F3C"
                                            label="Rose"
                                            link="rose"
                                          />
                                          <ColourPick
                                            color="#394042"
                                            label="Silver"
                                            link="silver"
                                          />
                                          <ColourPick
                                            color="#B9E3F7"
                                            label="Sky"
                                            link="sky"
                                          />
                                          <ColourPick
                                            color="#245161"
                                            label="Teal"
                                            link="teal"
                                          />
                                          <ColourPick
                                            color="white"
                                            label="White"
                                            link="white"
                                          />
                                          <ColourPick
                                            color="#c99d0a"
                                            label="Yellow"
                                            link="yellow"
                                          />
                                          <ColourPick
                                            color="#8c9e7d"
                                            label="Zombie Green"
                                            link="zombie_green"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "monarch"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "monarch",
                                        wings_colour: "amber",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Monarch</p>
                                </div>
                                {data.wings_type == "monarch" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#e68b40"
                                            label="Amber"
                                            link="amber"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#324b78"
                                            label="Blue Gray"
                                            link="bluegray"
                                          />
                                          <ColourPick
                                            color="#50b564"
                                            label="Bright Green"
                                            link="bright_green"
                                          />
                                          <ColourPick
                                            color="#543d31"
                                            label="Bronze"
                                            link="bronze"
                                          />
                                          <ColourPick
                                            color="#3b2d26"
                                            label="Brown"
                                            link="brown"
                                          />
                                          <ColourPick
                                            color="#261c17"
                                            label="Ceramic"
                                            link="ceramic"
                                          />
                                          <ColourPick
                                            color="#08300a"
                                            label="Forest"
                                            link="forest"
                                          />
                                          <ColourPick
                                            color="#DC6F35"
                                            label="Gold"
                                            link="gold"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#343043"
                                            label="Iron"
                                            link="iron"
                                          />
                                          <ColourPick
                                            color="#a08aa6"
                                            label="Lavender"
                                            link="lavender"
                                          />
                                          <ColourPick
                                            color="#E4A47C"
                                            label="Light"
                                            link="light"
                                          />
                                          <ColourPick
                                            color="#AE424A"
                                            label="Maroon"
                                            link="maroon"
                                          />
                                          <ColourPick
                                            color="orange"
                                            label="Monarch"
                                            link="monarch"
                                          />
                                          <ColourPick
                                            color="#2f4594"
                                            label="Navy"
                                            link="navy"
                                          />
                                          <ColourPick
                                            color="#ab561a"
                                            label="Orange"
                                            link="orange"
                                          />
                                          <ColourPick
                                            color="#72995d"
                                            label="Pale Green"
                                            link="pale_green"
                                          />
                                          <ColourPick
                                            color="#E08080"
                                            label="Pink"
                                            link="pink"
                                          />
                                          <ColourPick
                                            color="#842dcc"
                                            label="Purple"
                                            link="purple"
                                          />
                                          <ColourPick
                                            color="red"
                                            label="Red"
                                            link="red"
                                          />
                                          <ColourPick
                                            color="#B05F3C"
                                            label="Rose"
                                            link="rose"
                                          />
                                          <ColourPick
                                            color="#394042"
                                            label="Silver"
                                            link="silver"
                                          />
                                          <ColourPick
                                            color="#B9E3F7"
                                            label="Sky"
                                            link="sky"
                                          />
                                          <ColourPick
                                            color="#245161"
                                            label="Teal"
                                            link="teal"
                                          />
                                          <ColourPick
                                            color="white"
                                            label="White"
                                            link="white"
                                          />
                                          <ColourPick
                                            color="#c99d0a"
                                            label="Yellow"
                                            link="yellow"
                                          />
                                          <ColourPick
                                            color="#8c9e7d"
                                            label="Zombie Green"
                                            link="zombie_green"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                              <div className="w-[250px] flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "pixie"}
                                    onChange={() =>
                                      setData({
                                        ...data,
                                        wings_type: "pixie",
                                        wings_colour: "amber",
                                      })
                                    }
                                    className="size-4"
                                  />
                                  <p className="font-medium">Pixie</p>
                                </div>
                                {data.wings_type == "pixie" && (
                                  <div>
                                    <Popover>
                                      <PopoverTrigger className=" border-neutral-800 border-2  px-2 rounded-sm hover:bg-neutral-700 transition-colors items-center">
                                        Colours
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-neutral-800 border-none p-2 h-[270px] overflow-scroll no-scrollbar text-white">
                                        <div className="absolute bottom-1 right-1 bg-neutral-800">
                                          <ArrowBigDown />
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <ColourPick
                                            color="#e68b40"
                                            label="Amber"
                                            link="amber"
                                          />
                                          <ColourPick
                                            color="#111014"
                                            label="Black"
                                            link="black"
                                          />
                                          <ColourPick
                                            color="blue"
                                            label="Blue"
                                            link="blue"
                                          />
                                          <ColourPick
                                            color="#324b78"
                                            label="Blue Gray"
                                            link="bluegray"
                                          />
                                          <ColourPick
                                            color="#50b564"
                                            label="Bright Green"
                                            link="bright_green"
                                          />
                                          <ColourPick
                                            color="#543d31"
                                            label="Bronze"
                                            link="bronze"
                                          />
                                          <ColourPick
                                            color="#3b2d26"
                                            label="Brown"
                                            link="brown"
                                          />
                                          <ColourPick
                                            color="#261c17"
                                            label="Ceramic"
                                            link="ceramic"
                                          />
                                          <ColourPick
                                            color="#08300a"
                                            label="Forest"
                                            link="forest"
                                          />
                                          <ColourPick
                                            color="#DC6F35"
                                            label="Gold"
                                            link="gold"
                                          />
                                          <ColourPick
                                            color="#355713"
                                            label="Green"
                                            link="green"
                                          />
                                          <ColourPick
                                            color="#343043"
                                            label="Iron"
                                            link="iron"
                                          />
                                          <ColourPick
                                            color="#a08aa6"
                                            label="Lavender"
                                            link="lavender"
                                          />
                                          <ColourPick
                                            color="#E4A47C"
                                            label="Light"
                                            link="light"
                                          />
                                          <ColourPick
                                            color="#AE424A"
                                            label="Maroon"
                                            link="maroon"
                                          />
                                          <ColourPick
                                            color="#2f4594"
                                            label="Navy"
                                            link="navy"
                                          />
                                          <ColourPick
                                            color="#ab561a"
                                            label="Orange"
                                            link="orange"
                                          />
                                          <ColourPick
                                            color="#72995d"
                                            label="Pale Green"
                                            link="pale_green"
                                          />
                                          <ColourPick
                                            color="#E08080"
                                            label="Pink"
                                            link="pink"
                                          />
                                          <ColourPick
                                            color="teal"
                                            label="Pixie"
                                            link="pixie"
                                          />
                                          <ColourPick
                                            color="#842dcc"
                                            label="Purple"
                                            link="purple"
                                          />
                                          <ColourPick
                                            color="red"
                                            label="Red"
                                            link="red"
                                          />
                                          <ColourPick
                                            color="#B05F3C"
                                            label="Rose"
                                            link="rose"
                                          />
                                          <ColourPick
                                            color="#394042"
                                            label="Silver"
                                            link="silver"
                                          />
                                          <ColourPick
                                            color="#B9E3F7"
                                            label="Sky"
                                            link="sky"
                                          />
                                          <ColourPick
                                            color="#245161"
                                            label="Teal"
                                            link="teal"
                                          />
                                          <ColourPick
                                            color="white"
                                            label="White"
                                            link="white"
                                          />
                                          <ColourPick
                                            color="#c99d0a"
                                            label="Yellow"
                                            link="yellow"
                                          />
                                          <ColourPick
                                            color="#8c9e7d"
                                            label="Zombie Green"
                                            link="zombie_green"
                                          />
                                        </div>
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                )}
                              </div>
                            </div>
                            {data.wings_type == "dragonfly" ||
                            data.wings_type == "pixie" ? (
                              <div>
                                <p className="font-medium">Opacity</p>
                                <div className=" mt-3 flex flex-col gap-2">
                                  <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={data.wings_opacity === "solid"}
                                      onChange={() =>
                                        setData({
                                          ...data,
                                          wings_opacity: "solid",
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">Solid</p>
                                  </div>

                                  <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.wings_opacity === "transparent"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                          wings_opacity: "transparent",
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">Transparent</p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      ""
                    )}
                   { data.body_type=="male" || data.body_type=="muscular" ?  <AccordionItem value="item-3">
                      <AccordionTrigger>Prosthesis</AccordionTrigger>
                      <AccordionContent>
                      <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
                        <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.prosthesis === "none"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                           prosthesis:"none"
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">None</p>
                                  </div>
                        <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.prosthesis === "peg_leg"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                        prosthesis:"peg_leg"
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">Peg Leg</p>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.prosthesis === "hook"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                          prosthesis: "hook",
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">Hook</p>
                                  </div>
                        </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>:''}
                  </Accordion>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2"></AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};

export default Sidebar;
