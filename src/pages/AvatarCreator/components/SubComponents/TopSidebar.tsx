import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
const TopSidebar = () => {

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
        setData({ ...data, top_colour: value });
      };
    

  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
{data.body_type == "male" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "none"}
          onChange={() => setData({ ...data, top: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "formal"}
          onChange={() => setData({ ...data, top: "formal",top_colour:"white", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Formal</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "formal_stripped"}
          onChange={() => setData({ ...data, top: "formal_stripped", top_colour:"white", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Formal Stripped</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "laced_long"}
          onChange={() => setData({ ...data, top: "laced_long", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Laced Long</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "laced_short"}
          onChange={() => setData({ ...data, top: "laced_short", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Laced Short</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve"}
          onChange={() => setData({ ...data, top: "longsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "shortsleeve"}
          onChange={() => setData({ ...data, top: "shortsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Shortsleeve</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless"}
          onChange={() => setData({ ...data, top: "sleeveless", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "striped"}
          onChange={() => setData({ ...data, top: "striped", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Striped</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "vest"}
          onChange={() => setData({ ...data, top: "vest", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Vest</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "vest_open"}
          onChange={() => setData({ ...data, top: "vest_open", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Vest Open</p>
      </div>
</div>}


{data.body_type == "female" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "none"}
          onChange={() => setData({ ...data, top: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "blouse"}
          onChange={() => setData({ ...data, top: "blouse", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Blouse</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "blouse_longsleeve"}
          onChange={() => setData({ ...data, top: "blouse_longsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Blouse Longsleeve</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "corset"}
          onChange={() => setData({ ...data, top: "corset", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Corset</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve"}
          onChange={() => setData({ ...data, top: "longsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2"}
          onChange={() => setData({ ...data, top: "longsleeve2", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve2</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_buttoned"}
          onChange={() => setData({ ...data, top: "longsleeve2_buttoned", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Buttoned</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_cardigan"}
          onChange={() => setData({ ...data, top: "longsleeve2_cardigan", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Cardigan</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_polo"}
          onChange={() => setData({ ...data, top: "longsleeve2_polo", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Polo</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_scoop"}
          onChange={() => setData({ ...data, top: "longsleeve2_scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_vneck"}
          onChange={() => setData({ ...data, top: "longsleeve2_vneck", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Vneck</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "scoop"}
          onChange={() => setData({ ...data, top: "scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "shortsleeve"}
          onChange={() => setData({ ...data, top: "shortsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Shortsleeve</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "shortsleeve_polo"}
          onChange={() => setData({ ...data, top: "shortsleeve_polo", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Shortsleeve Polo</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless"}
          onChange={() => setData({ ...data, top: "sleeveless", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2"}
          onChange={() => setData({ ...data, top: "sleeveless2", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless2</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_buttoned"}
          onChange={() => setData({ ...data, top: "sleeveless2_buttoned", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Buttoned</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_polo"}
          onChange={() => setData({ ...data, top: "sleeveless2_polo", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Polo</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_scoop"}
          onChange={() => setData({ ...data, top: "sleeveless2_scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_vneck"}
          onChange={() => setData({ ...data, top: "sleeveless2_vneck", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Vneck</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tanktop"}
          onChange={() => setData({ ...data, top: "tanktop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tanktop</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt"}
          onChange={() => setData({ ...data, top: "tshirt", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tshirt</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt_buttoned"}
          onChange={() => setData({ ...data, top: "tshirt_buttoned", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tshirt Buttoned</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt_scoop"}
          onChange={() => setData({ ...data, top: "tshirt_scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tshirt Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt_vneck"}
          onChange={() => setData({ ...data, top: "tshirt_vneck", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tshirt Vneck</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tunic"}
          onChange={() => setData({ ...data, top: "tunic", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tunic</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tunic_sara"}
          onChange={() => setData({ ...data, top: "tunic_sara", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tunic Sara</p>
      </div>
     
</div>}

{data.body_type == "teen" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "none"}
          onChange={() => setData({ ...data, top: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve"}
          onChange={() => setData({ ...data, top: "longsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2"}
          onChange={() => setData({ ...data, top: "longsleeve2", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve2</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_buttoned"}
          onChange={() => setData({ ...data, top: "longsleeve2_buttoned", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Buttoned</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_polo"}
          onChange={() => setData({ ...data, top: "longsleeve2_polo", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Polo</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_scoop"}
          onChange={() => setData({ ...data, top: "longsleeve2_scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve2_vneck"}
          onChange={() => setData({ ...data, top: "longsleeve2_vneck", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve Vneck</p>
      </div>

      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "shortsleeve"}
          onChange={() => setData({ ...data, top: "shortsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Shortsleeve</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "shortsleeve_polo"}
          onChange={() => setData({ ...data, top: "shortsleeve_polo", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Shortsleeve Polo</p>
      </div>


      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt"}
          onChange={() => setData({ ...data, top: "tshirt", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">T-shirt</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt_buttoned"}
          onChange={() => setData({ ...data, top: "tshirt_buttoned", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">T-shirt Buttoned</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt_scoop"}
          onChange={() => setData({ ...data, top: "tshirt_scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">T-shirt Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tshirt_vneck"}
          onChange={() => setData({ ...data, top: "tshirt_vneck", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">T-shirt Vneck</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2"}
          onChange={() => setData({ ...data, top: "sleeveless2", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_buttoned"}
          onChange={() => setData({ ...data, top: "sleeveless2_buttoned", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Buttoned</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_polo"}
          onChange={() => setData({ ...data, top: "sleeveless2_polo", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Polo</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_scoop"}
          onChange={() => setData({ ...data, top: "sleeveless2_scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless2_vneck"}
          onChange={() => setData({ ...data, top: "sleeveless2_vneck", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless Vneck</p>
      </div>

      

</div>}

{data.body_type == "pregnant" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "none"}
          onChange={() => setData({ ...data, top: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "longsleeve"}
          onChange={() => setData({ ...data, top: "longsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Longsleeve</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "scoop"}
          onChange={() => setData({ ...data, top: "scoop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Scoop</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "shortsleeve"}
          onChange={() => setData({ ...data, top: "shortsleeve", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Shortsleeve</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "sleeveless"}
          onChange={() => setData({ ...data, top: "sleeveless", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Sleeveless</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "tanktop"}
          onChange={() => setData({ ...data, top: "tanktop", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">Tanktop</p>
      </div>
    
</div>}


{data.body_type == "child" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "none"}
          onChange={() => setData({ ...data, top: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
    
</div>}

{data.body_type == "muscular" && <div className="male flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.top == "none"}
          onChange={() => setData({ ...data, top: "none", dress:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
    
</div>}

    </div>
    {data.top == "none" || data.top =="formal_stripped" || data.top == "formal" ? '' : (
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

export default TopSidebar