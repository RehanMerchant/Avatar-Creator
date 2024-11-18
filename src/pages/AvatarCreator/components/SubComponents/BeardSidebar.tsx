import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
const BeardSidebar = () => {
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
        setData({ ...data, beard_colour: value });
      };
    
  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">

    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.beard == "none"}
          onChange={() => setData({ ...data, beard: "none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.beard == "5oclock_shadow"}
          onChange={() => setData({ ...data, beard: "5oclock_shadow" })}
          className="size-4"
        />
        <p className="font-medium">5'o Clock Shadow</p>
      </div>
     
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.beard == "basic"}
          onChange={() => setData({ ...data, beard: "basic" })}
          className="size-4"
        />
        <p className="font-medium">Basic</p>
      </div>


      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.beard == "medium"}
          onChange={() => setData({ ...data, beard: "medium" })}
          className="size-4"
        />
        <p className="font-medium">Medium</p>
      </div>


      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.beard == "trimmed"}
          onChange={() => setData({ ...data, beard: "trimmed" })}
          className="size-4"
        />
        <p className="font-medium">Trimmed</p>
      </div>


      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.beard == "winter"}
          onChange={() => setData({ ...data, beard: "winter" })}
          className="size-4"
        />
        <p className="font-medium">Winter</p>
      </div>


    </div>
    {data.beard !== "none" ? (
    <Select
      defaultValue="ash"
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-[230px] ">
        <SelectValue placeholder="Colour" />
      </SelectTrigger>
      <SelectContent className="bg-neutral-900 text-white">
        <SelectItem value="ash">
          <ColourSelect
            colour="Ash"
            colourcode="#A6706E"
          />
        </SelectItem>
        <SelectItem value="black">
          <ColourSelect
            colour="Black"
            colourcode="#121717"
          />
        </SelectItem>
        <SelectItem value="blonde">
          <ColourSelect
            colour="Blonde"
            colourcode="#B56C22"
          />
        </SelectItem>
        <SelectItem value="blue">
          <ColourSelect
            colour="Blue"
            colourcode="#0C78D8"
          />
        </SelectItem>
        <SelectItem value="carrot">
          <ColourSelect
            colour="Carrot"
            colourcode="#922200"
          />
        </SelectItem>
        <SelectItem value="chestnut">
          <ColourSelect
            colour="Chestnut"
            colourcode="#64200B"
          />
        </SelectItem>
        <SelectItem value="dark_brown">
          <ColourSelect
            colour="Dark Brown"
            colourcode="#290E02"
          />
        </SelectItem>
        <SelectItem value="dark_gray">
          <ColourSelect
            colour="Dark gray"
            colourcode="#6F6F6F"
          />
        </SelectItem>
        <SelectItem value="ginger">
          <ColourSelect
            colour="Ginger"
            colourcode="#DE930B"
          />
        </SelectItem>
        <SelectItem value="gold">
          <ColourSelect
            colour="Gold"
            colourcode="#FFE67D"
          />
        </SelectItem>
        <SelectItem value="gray">
          <ColourSelect
            colour="Grey"
            colourcode="#525252"
          />
        </SelectItem>
        <SelectItem value="green">
          <ColourSelect
            colour="Green"
            colourcode="#004500"
          />
        </SelectItem>
        <SelectItem value="light_brown">
          <ColourSelect
            colour="Light Brown"
            colourcode="#552F0D"
          />
        </SelectItem>
        <SelectItem value="navy">
          <ColourSelect
            colour="Navy"
            colourcode="navy"
          />
        </SelectItem>
        <SelectItem value="orange">
          <ColourSelect
            colour="Orange"
            colourcode="orange"
          />
        </SelectItem>
        <SelectItem value="pink">
          <ColourSelect
            colour="Pink"
            colourcode="#D7469F"
          />
        </SelectItem>
        <SelectItem value="platinum">
          <ColourSelect
            colour="Platinum"
            colourcode="#9E7555"
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
            colourcode="#071B27"
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
            colourcode="#A8271D"
          />
        </SelectItem>
        <SelectItem value="rose">
          <ColourSelect
            colour="Rose"
            colourcode="#D98BA8"
          />
        </SelectItem>
        <SelectItem value="sandy">
          <ColourSelect
            colour="Sandy"
            colourcode="#F0ECB6"
          />
        </SelectItem>
        <SelectItem value="strawberry">
          <ColourSelect
            colour="Strawberry"
            colourcode="orange"
          />
        </SelectItem>
        <SelectItem value="violet">
          <ColourSelect
            colour="Violet"
            colourcode="#4E62EA"
          />
        </SelectItem>
        <SelectItem value="white">
          <ColourSelect
            colour="White"
            colourcode="white"
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

export default BeardSidebar