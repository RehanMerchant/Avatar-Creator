import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
const JacketSidebar = () => {

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
        setData({ ...data, jacket_colour: value });
      };
    

  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
{data.body_type == "male" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "none"}
          onChange={() => setData({ ...data, jacket: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "collared"}
          onChange={() => setData({ ...data, jacket: "collared", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Collared</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "frock"}
          onChange={() => setData({ ...data, jacket: "frock", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Frock</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "iverness"}
          onChange={() => setData({ ...data, jacket: "iverness", jacket_colour:"black" ,dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Iverness</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "santa"}
          onChange={() => setData({ ...data, jacket: "santa",dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Santa</p>
      </div>
      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "tabard"}
          onChange={() => setData({ ...data, jacket: "tabard",dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tabard</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "trench"}
          onChange={() => setData({ ...data, jacket: "trench", jacket_colour:"gray",dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Trench</p>
      </div>
     
</div>}


{data.body_type == "female" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "none"}
          onChange={() => setData({ ...data, jacket: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "tabard"}
          onChange={() => setData({ ...data, jacket: "tabard", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tabard</p>
      </div>

     
     
</div>}

{data.body_type == "teen" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "none"}
          onChange={() => setData({ ...data, jacket: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
    

      

</div>}

{data.body_type == "pregnant" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "none"}
          onChange={() => setData({ ...data, jacket: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
   
    
</div>}


{data.body_type == "child" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "none"}
          onChange={() => setData({ ...data, jacket: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
    
</div>}

{data.body_type == "muscular" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.jacket == "none"}
          onChange={() => setData({ ...data, jacket: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
    
</div>}

    </div>
    {data.jacket == "none" || data.jacket == "iverness" || data.jacket == "trench"  ? '' : (
    <Select
      defaultValue="black"
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-[230px] ">
        <SelectValue placeholder="Colour" />
      </SelectTrigger>
      <SelectContent className="bg-neutral-900 text-white">
        <SelectItem value="black">
          <ColourSelect
            colour="Black"
            colourcode="#121717"
          />
        </SelectItem>
        <SelectItem value="blue">
          <ColourSelect
            colour="Blue"
            colourcode="#0C78D8"
          />
        </SelectItem>
        <SelectItem value="bluegray">
          <ColourSelect
            colour="Bluegray"
            colourcode="#315B49"
          />
        </SelectItem>
        <SelectItem value="brown">
          <ColourSelect
            colour="Brown"
            colourcode="#290E02"
          />
        </SelectItem>
        <SelectItem value="charcoal">
          <ColourSelect
            colour="Charcoal"
            colourcode="#4A5057"
          />
        </SelectItem>
        <SelectItem value="forest">
          <ColourSelect
            colour="Forest"
            colourcode="#1B5502"
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
            colourcode="green"
          />
        </SelectItem>
        <SelectItem value="lavender">
          <ColourSelect
            colour="Lavender"
            colourcode="#D085ED"
          />
        </SelectItem>
        <SelectItem value="leather">
          <ColourSelect
            colour="Leather"
            colourcode="#552F0D"
          />
        </SelectItem>
        <SelectItem value="maroon">
          <ColourSelect
            colour="Maroon"
            colourcode="#AE424A"
          />
        </SelectItem>
        <SelectItem value="navy">
          <ColourSelect
            colour="Navy"
            colourcode="#3C49AD"
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
        <SelectItem value="purple">
          <ColourSelect
            colour="Purple"
            colourcode="purple"
          />
        </SelectItem>
        <SelectItem value="red">
          <ColourSelect
            colour="Red"
            colourcode="red"
          />
        </SelectItem>
        <SelectItem value="rose">
          <ColourSelect
            colour="Rose"
            colourcode="#B05F3C"
          />
        </SelectItem>
        <SelectItem value="sky">
          <ColourSelect
            colour="Sky"
            colourcode="#C6EEFD"
          />
        </SelectItem>
        <SelectItem value="slate">
          <ColourSelect
            colour="Slate"
            colourcode="#E5E6C7"
          />
        </SelectItem>
        <SelectItem value="tan">
          <ColourSelect
            colour="Tan"
            colourcode="#B78C41"
          />
        </SelectItem>
        <SelectItem value="teal">
          <ColourSelect
            colour="Teal"
            colourcode="#00CFDF"
          />
        </SelectItem>
        <SelectItem value="walnut">
          <ColourSelect
            colour="Walnut"
            colourcode="#996B4A"
          />
        </SelectItem>
        <SelectItem value="white">
          <ColourSelect
            colour="White"
            colourcode="white"
          />
        </SelectItem>
        <SelectItem value="yellow">
          <ColourSelect
            colour="Yellow"
            colourcode="#FFE360"
          />
        </SelectItem>
      </SelectContent>
    </Select>
  )}
  </div>
  )
}

export default JacketSidebar