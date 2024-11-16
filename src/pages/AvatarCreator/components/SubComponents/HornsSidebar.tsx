import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";



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
  

const HornsSidebar = () => {
    const { setData, data } = useContext(MyContext)!;
    const handleChange = (value: string) => {
        setData({ ...data, horns_colour: value });
      };
    
  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.horns_type === "none"}
          onChange={() =>
            setData({ ...data, horns_type: "none" })
          }
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.horns_type === "backwards"}
          onChange={() =>
            setData({ ...data, horns_type: "backwards" })
          }
          className="size-4"
        />
        <p className="font-medium">Backwards</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.horns_type === "curled"}
          onChange={() =>
            setData({ ...data, horns_type: "curled" })
          }
          className="size-4"
        />
        <p className="font-medium">Curled</p>
      </div>
      </div>
      {data.horns_type !== "none" ? (
      <Select
        defaultValue="amber"
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-[230px] ">
          <SelectValue placeholder="Colour" />
        </SelectTrigger>
        <SelectContent className="bg-neutral-900 text-white">
          <SelectItem value="amber">
            <ColourSelect
              colour="Amber"
              colourcode="#EA9F54"
            />
            </SelectItem>
            <SelectItem value="ash">
            <ColourSelect
              colour="Ash"
              colourcode="#5b4c75"
            />
            </SelectItem>
          <SelectItem value="black">
            <ColourSelect
              colour="Dark"
              colourcode="#683A2B"
            />
          </SelectItem>
          <SelectItem value="blonde">
            <ColourSelect
              colour="Blonde"
              colourcode="#d1942a"
            />
          </SelectItem>
          <SelectItem value="blue">
            <ColourSelect
              colour="Blue"
              colourcode="#A9C9CA"
            />
          </SelectItem>
          <SelectItem value="bright_green">
            <ColourSelect
              colour="Bright Green"
              colourcode="#75AE23"
            />
          </SelectItem>
          <SelectItem value="bronze">
            <ColourSelect
              colour="Bronze"
              colourcode="#AE6B3F"
            />
          </SelectItem>
          <SelectItem value="brown">
            <ColourSelect
              colour="Brown"
              colourcode="#9C663E"
            />
          </SelectItem>
          <SelectItem value="carrot">
            <ColourSelect
              colour="Carrot"
              colourcode="#e6663c"
            />
          </SelectItem>
          <SelectItem value="chestnut">
            <ColourSelect
              colour="Chestnut"
              colourcode="#613624"
            />
          </SelectItem>
          <SelectItem value="dark_brown">
            <ColourSelect
              colour="Dark Brown"
              colourcode="#261c17"
            />
          </SelectItem>
          <SelectItem value="dark_gray">
            <ColourSelect
              colour="Dark Gray"
              colourcode="#2e2e2e"
            />
          </SelectItem>
          <SelectItem value="dark_green">
            <ColourSelect
              colour="Dark Green"
              colourcode="darkgreen"
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
              colourcode="#ab6b0a"
            />
          </SelectItem>
          <SelectItem value="gold">
            <ColourSelect
              colour="Gold"
              colourcode="#deb514"
            />
          </SelectItem>
          <SelectItem value="gray">
            <ColourSelect
              colour="Gray"
              colourcode="#757575"
            />
          </SelectItem>
          <SelectItem value="green">
            <ColourSelect
              colour="Green"
              colourcode="#39AA4E"
            />
          </SelectItem>
          <SelectItem value="horns">
            <ColourSelect
              colour="Horns"
              colourcode="yellow"
            />
          </SelectItem>
          <SelectItem value="lavender">
            <ColourSelect
              colour="Lavender"
              colourcode="#C9D0EE"
            />
          </SelectItem>
          <SelectItem value="light">
            <ColourSelect
              colour="Light"
              colourcode="#F9D5BA"
            />
          </SelectItem>
          <SelectItem value="light_brown">
            <ColourSelect
              colour="Light Brown"
              colourcode="#25160F"
            />
          </SelectItem>
          <SelectItem value="metallic_brass">
            <ColourSelect
              colour="Metallic Brass"
              colourcode="#8C6B38"
            />
          </SelectItem>
          <SelectItem value="metallic_bronze">
            <ColourSelect
              colour="Metallic Bronze"
              colourcode="#A87200"
            />
          </SelectItem>
          <SelectItem value="metallic_ceramic">
            <ColourSelect
              colour="Metallic Creamic"
              colourcode="#B5916D"
            />
          </SelectItem>
          <SelectItem value="metallic_copper">
            <ColourSelect
              colour="Metallic Copper"
              colourcode="#733D1F"
            />
          </SelectItem>
          <SelectItem value="metallic_gold">
            <ColourSelect
              colour="Metallic Gold"
              colourcode="#D5B051"
            />
          </SelectItem>
          <SelectItem value="metallic_iron">
            <ColourSelect
              colour="Metallic Iron"
              colourcode="#5C5668"
            />
          </SelectItem>
          <SelectItem value="metallic_silver">
            <ColourSelect
              colour="Metallic Silver"
              colourcode="#788182"
            />
          </SelectItem>
          <SelectItem value="metallic_steel">
            <ColourSelect
              colour="Metallic Steel"
              colourcode="#B1ABAA"
            />
          </SelectItem>
          <SelectItem value="navy">
            <ColourSelect
              colour="Navy"
              colourcode="#3B47A1"
            />
          </SelectItem>
          <SelectItem value="olive">
            <ColourSelect
              colour="Olive"
              colourcode="#D38B59"
            />
          </SelectItem>
          <SelectItem value="orange">
            <ColourSelect
              colour="Orange"
              colourcode="orange"
            />
          </SelectItem>
          <SelectItem value="pale_green">
            <ColourSelect
              colour="Pale Green"
              colourcode="#3C5631"
            />
          </SelectItem>
          <SelectItem value="pink">
            <ColourSelect
              colour="Pink"
              colourcode="pink"
            />
          </SelectItem>
          <SelectItem value="platinum">
            <ColourSelect
              colour="Platinum"
              colourcode="#bdafba"
            />
          </SelectItem>
          <SelectItem value="purple">
            <ColourSelect
              colour="Purple"
              colourcode="purple"
            />
            
          </SelectItem>
          <SelectItem value="raven">
            <ColourSelect
              colour="Raven"
              colourcode="#0f3a59"
            />
            
          </SelectItem>
          <SelectItem value="red">
            <ColourSelect
              colour="Red"
              colourcode="red"
            />
            
          </SelectItem>
          <SelectItem value="redhead">
            <ColourSelect
              colour="Redhead"
              colourcode="#ab4646"
            />
            
          </SelectItem>
          <SelectItem value="rose">
            <ColourSelect
              colour="Rose"
              colourcode="#ad4b8b"
            />
            
          </SelectItem>
          <SelectItem value="sandy">
            <ColourSelect
              colour="Sandy"
              colourcode="#c9c381"
            />
            
          </SelectItem>
          <SelectItem value="skin_black">
            <ColourSelect
              colour="Skin Black"
              colourcode="#40302B"
            />
            
          </SelectItem>
          <SelectItem value="skin_blue">
            <ColourSelect
              colour="Skin Blue"
              colourcode="#5D6F7F"
            />
            
          </SelectItem>
          <SelectItem value="skin_green">
            <ColourSelect
              colour="Skin Green"
              colourcode="#3DA556"
            />
            
          </SelectItem>
          <SelectItem value="strawberry">
            <ColourSelect
              colour="Strawberry"
              colourcode="#D2C271"
            />
            
          </SelectItem>
          <SelectItem value="taupe">
            <ColourSelect
              colour="Taupe"
              colourcode="#BA8454"
            />
          </SelectItem>
          <SelectItem value="violet">
            <ColourSelect
              colour="Violet"
              colourcode="violet"
            />
          </SelectItem>
          <SelectItem value="white">
            <ColourSelect
              colour="White"
              colourcode="white"
            />
          </SelectItem>
          <SelectItem value="zombie">
            <ColourSelect
              colour="Zombie"
              colourcode="#A79778"
            />
          </SelectItem>
          <SelectItem value="zombie_green">
            <ColourSelect
              colour="Zombie Green"
              colourcode="#88A26F"
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

export default HornsSidebar