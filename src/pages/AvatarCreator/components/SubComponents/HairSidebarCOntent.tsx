import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
const HairSidebarCOntent = () => {
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
        setData({ ...data, hair_colour: value });
      };
    
  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "none"}
          onChange={() => setData({ ...data, hair_type: "none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "afro"}
          onChange={() => setData({ ...data, hair_type:"afro" })}
          className="size-4"
        />
        <p className="font-medium">Afro</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "bangs"}
          onChange={() => setData({ ...data, hair_type: "bangs" })}
          className="size-4"
        />
        <p className="font-medium">Bangs</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "bangslong"}
          onChange={() => setData({ ...data, hair_type: "bangslong" })}
          className="size-4"
        />
        <p className="font-medium">Long Bangs1</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "bangslong2"}
          onChange={() => setData({ ...data, hair_type: "bangslong2" })}
          className="size-4"
        />
        <p className="font-medium">Long Bangs2</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "bangsshort"}
          onChange={() => setData({ ...data, hair_type: "bangsshort" })}
          className="size-4"
        />
        <p className="font-medium">Short Bangs</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "bedhead"}
          onChange={() => setData({ ...data, hair_type: "bedhead" })}
          className="size-4"
        />
        <p className="font-medium">Bed Head</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "braid2"}
          onChange={() => setData({ ...data, hair_type: "braid2" })}
          className="size-4"
        />
        <p className="font-medium">Braids2</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "bunches"}
          onChange={() => setData({ ...data, hair_type: "bunches" })}
          className="size-4"
        />
        <p className="font-medium">Bunches</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "cowlick_tall"}
          onChange={() => setData({ ...data, hair_type: "cowlick_tall" })}
          className="size-4"
        />
        <p className="font-medium">Cowlick Tall</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "curly_long"}
          onChange={() => setData({ ...data, hair_type: "curly_long" })}
          className="size-4"
        />
        <p className="font-medium">Curly Long</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "curtains"}
          onChange={() => setData({ ...data, hair_type: "curtains" })}
          className="size-4"
        />
        <p className="font-medium">Curtains</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "curtains_long"}
          onChange={() => setData({ ...data, hair_type: "curtains_long" })}
          className="size-4"
        />
        <p className="font-medium">Curtains Long</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "dreadlocks_long"}
          onChange={() => setData({ ...data, hair_type: "dreadlocks_long" })}
          className="size-4"
        />
        <p className="font-medium">Dreadlocks Long</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "flat_top_fade"}
          onChange={() => setData({ ...data, hair_type: "flat_top_fade" })}
          className="size-4"
        />
        <p className="font-medium">Flat Top Fade</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "half_up"}
          onChange={() => setData({ ...data, hair_type: "half_up" })}
          className="size-4"
        />
        <p className="font-medium">Half Up</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "halfmessy"}
          onChange={() => setData({ ...data, hair_type: "halfmessy" })}
          className="size-4"
        />
        <p className="font-medium">Half Messy</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "high_and_tight"}
          onChange={() => setData({ ...data, hair_type: "high_and_tight" })}
          className="size-4"
        />
        <p className="font-medium">High and Tight</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "high_ponytail"}
          onChange={() => setData({ ...data, hair_type: "high_ponytail" })}
          className="size-4"
        />
        <p className="font-medium">High Ponytail</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "lob"}
          onChange={() => setData({ ...data, hair_type: "lob" })}
          className="size-4"
        />
        <p className="font-medium">Lob</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "long"}
          onChange={() => setData({ ...data, hair_type: "long" })}
          className="size-4"
        />
        <p className="font-medium">Long</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "long_band"}
          onChange={() => setData({ ...data, hair_type: "long_band" })}
          className="size-4"
        />
        <p className="font-medium">Long Band</p>
      </div>
      
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "long_center_part"}
          onChange={() => setData({ ...data, hair_type: "long_center_part" })}
          className="size-4"
        />
        <p className="font-medium">Long Center Part</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "long_messy"}
          onChange={() => setData({ ...data, hair_type: "long_messy" })}
          className="size-4"
        />
        <p className="font-medium">Long Messy1</p>
      </div>
       
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "long_messy2"}
          onChange={() => setData({ ...data, hair_type: "long_messy2" })}
          className="size-4"
        />
        <p className="font-medium">Long Messy2</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "long_tied"}
          onChange={() => setData({ ...data, hair_type: "long_tied" })}
          className="size-4"
        />
        <p className="font-medium">Long Tied</p>
      </div>


      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "longhawk"}
          onChange={() => setData({ ...data, hair_type: "longhawk" })}
          className="size-4"
        />
        <p className="font-medium">Long Hawk</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "loose"}
          onChange={() => setData({ ...data, hair_type: "loose" })}
          className="size-4"
        />
        <p className="font-medium">Loose</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "messy1"}
          onChange={() => setData({ ...data, hair_type: "messy1" })}
          className="size-4"
        />
        <p className="font-medium">Messy1</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "messy2"}
          onChange={() => setData({ ...data, hair_type: "messy2" })}
          className="size-4"
        />
        <p className="font-medium">Messy2</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "messy3"}
          onChange={() => setData({ ...data, hair_type: "messy3" })}
          className="size-4"
        />
        <p className="font-medium">Messy3</p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.hair_type == "mop"}
          onChange={() => setData({ ...data, hair_type: "mop" })}
          className="size-4"
        />
        <p className="font-medium">Mop</p>
      </div>

    </div>
    {data.hair_type !== "none" ? (
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

export default HairSidebarCOntent