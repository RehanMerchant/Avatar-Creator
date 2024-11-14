import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";

const TailCOntentSidebar = () => {
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
      
    const { setData, data } = useContext(MyContext)!;
    const handleChange = (value: string) => {
        setData({ ...data, tail_colour: value });
      };
    
  return (
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
  )
}

export default TailCOntentSidebar