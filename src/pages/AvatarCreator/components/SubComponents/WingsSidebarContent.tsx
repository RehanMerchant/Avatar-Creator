import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { ArrowBigDown } from "lucide-react";
import { cn } from "@/lib/utils";

const WingsSidebarContent = () => {

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
    const { setData, data } = useContext(MyContext)!;
  return (
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
  )
}

export default WingsSidebarContent