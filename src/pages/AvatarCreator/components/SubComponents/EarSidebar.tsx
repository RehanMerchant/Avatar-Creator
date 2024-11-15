import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
const EarSidebar = () => {
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
        setData({ ...data, ear_colour: value });
      };
    
  return (
   
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "none"}
          onChange={() =>
            setData({ ...data, ear_type: "none" })
          }
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "avyon"}
          onChange={() =>
            setData({ ...data, ear_type: "avyon" })
          }
          className="size-4"
        />
        <p className="font-medium">Avyon</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "big"}
          onChange={() =>
            setData({ ...data, ear_type: "big" })
          }
          className="size-4"
        />
        <p className="font-medium">Big</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type==="cat"}
          onChange={() =>
            setData({ ...data, ear_type: "cat" })
          }
          className="size-4"
        />
        <p className="font-medium">Cat</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type==="down"}
          onChange={() =>
            setData({ ...data,ear_type: "down" })
          }
          className="size-4"
        />
        <p className="font-medium">Down</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "dragon"}
          onChange={() =>
            setData({ ...data, ear_type: "dragon" })
          }
          className="size-4"
        />
        <p className="font-medium">Dragon</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "elven"}
          onChange={() =>
            setData({ ...data, ear_type: "elven" })
          }
          className="size-4"
        />
        <p className="font-medium">Elven</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "hang"}
          onChange={() =>
            setData({ ...data, ear_type: "hang" })
          }
          className="size-4"
        />
        <p className="font-medium">Hang</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "long"}
          onChange={() =>
            setData({ ...data, ear_type: "long" })
          }
          className="size-4"
        />
        <p className="font-medium">Long</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "iykon"}
          onChange={() =>
            setData({ ...data, ear_type: "iykon" })
          }
          className="size-4"
        />
        <p className="font-medium">Iykon</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type==="medium"}
          onChange={() =>
            setData({ ...data, ear_type: "medium" })
          }
          className="size-4"
        />
        <p className="font-medium">Medium</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "wolf"}
          onChange={() =>
            setData({ ...data, ear_type: "wolf" })
          }
          className="size-4"
        />
        <p className="font-medium">Wolf</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.ear_type === "zabos"}
          onChange={() =>
            setData({ ...data, ear_type: "zabos" })
          }
          className="size-4"
        />
        <p className="font-medium">zabos</p>
      </div>
    </div>

    {data.ear_type !== "none" ? (
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
          <SelectItem value="black">
            <ColourSelect
              colour="Dark"
              colourcode="#683A2B"
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
          <SelectItem value="green">
            <ColourSelect
              colour="Green"
              colourcode="#39AA4E"
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
          <SelectItem value="olive">
            <ColourSelect
              colour="Olive"
              colourcode="#D38B59"
            />
          </SelectItem>
          <SelectItem value="pale_green">
            <ColourSelect
              colour="Pale Green"
              colourcode="#3C5631"
            />
          </SelectItem>
          <SelectItem value="taupe">
            <ColourSelect
              colour="Taupe"
              colourcode="#BA8454"
            />
          </SelectItem>
          <SelectItem value="zombie">
            <ColourSelect
              colour="Zombie"
              colourcode="#A79778"
            />
          </SelectItem>
          <SelectItem value="Zombie_green">
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

export default EarSidebar