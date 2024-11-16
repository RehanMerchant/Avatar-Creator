import { MyContext } from "@/context/AvatarDataContext";
import { useContext, useState } from "react";
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


const WingsSidebarContent = () => {

    const { setData, data } = useContext(MyContext)!;
    const [colorvalue,setColorvalue] = useState("blue")
    const handleChange = (value: string) => {
      setColorvalue(value)
      setData({ ...data, wings_colour: value });
    };
  
    const setdef = (defdata:string) =>{
      setData({
        ...data,
        wings_type: defdata,
        wings_colour: "blue",
      });
      setColorvalue("blue")
    }

  return (
    <div className="mt-1 w-full h-auto flex flex-col gap-4 ">
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
                              <div className="w-full  flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "bat"}
                                    onChange={()=>setdef("bat")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Bat</p>
                                </div>
                              </div>
                              <div className=" w-full flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "dragonfly"}
                                    onChange={()=>setdef("dragonfly")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Dragonfly</p>
                                </div>
                              </div>
                              <div className="w-full  flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "feathered"}
                                    onChange={()=>setdef("feathered")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Feathered</p>
                                </div>
                              </div>
                              <div className="w-full  flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "lizard"}
                                    onChange={()=>setdef("lizard")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Lizard</p>
                                </div>
                              </div>
                              <div className="w-full  flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "lunar"}
                                    onChange={()=>setdef("lunar")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Lunar</p>
                                </div>
                              </div>
                              <div className="w-full  flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "monarch"}
                                    onChange={()=>setdef("monarch")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Monarch</p>
                                </div>
                              </div>
                              <div className="w-full  flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <input
                                    type="checkbox"
                                    checked={data.wings_type === "pixie"}
                                    onChange={()=>setdef("pixie")}
                                    className="size-4"
                                  />
                                  <p className="font-medium">Pixie</p>
                                </div>
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

{data.wings_type !== "none" ? (
      <Select
        defaultValue="blue"
        value={colorvalue}
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-[230px] ">
          <SelectValue placeholder="Colour" />
        </SelectTrigger>
        <SelectContent className="bg-neutral-900 text-white">
          { data.wings_type =="dragonfly" || data.wings_type == "monarch" || data.wings_type == "pixie" || data.wings_type == "lunar" ? 
            <div>
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
          <SelectItem value="bluegray">
            <ColourSelect
              colour="Blue Gray"
              colourcode="#683A2B"
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
          <SelectItem value="ceramic">
            <ColourSelect
              colour="Ceramic"
              colourcode="#e6663c"
            />
          </SelectItem>
          <SelectItem value="forest">
            <ColourSelect
              colour="Forest"
              colourcode="darkgreen"
            />
          </SelectItem>
          <SelectItem value="gold">
            <ColourSelect
              colour="Gold"
              colourcode="#deb514"
            />
          </SelectItem>
          <SelectItem value="green">
            <ColourSelect
              colour="Green"
              colourcode="#39AA4E"
            />
          </SelectItem>
          <SelectItem value="iron">
            <ColourSelect
              colour="Iron"
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
          <SelectItem value="maroon">
            <ColourSelect
              colour="Maroon"
              colourcode="#25160F"
            />
          </SelectItem>
          <SelectItem value="navy">
            <ColourSelect
              colour="Navy"
              colourcode="#3B47A1"
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
              colourcode="#ad4b8b"
            />
            
          </SelectItem>
          <SelectItem value="silver">
            <ColourSelect
              colour="Silver"
              colourcode="#c9c381"
            />
            
          </SelectItem>
          <SelectItem value="sky">
            <ColourSelect
              colour="Sky"
              colourcode="sky"
            />
            
          </SelectItem>
          <SelectItem value="teal">
            <ColourSelect
              colour="Teal"
              colourcode="teal"
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
              colourcode="yellow"
            />
          </SelectItem>
          <SelectItem value="zombie_green">
            <ColourSelect
              colour="Zombie Green"
              colourcode="#88A26F"
            />
          </SelectItem>
          </div> : ''
}
{
  data.wings_type == "dragonfly" &&     <SelectItem value="dragonfly">
  <ColourSelect
    colour="Dragonfly"
    colourcode="#83E5F7"
  />
</SelectItem>
}
{
  data.wings_type == "lunar" &&     <SelectItem value="lunar">
  <ColourSelect
    colour="Lunar"
    colourcode="#A7E8A5"
  />
</SelectItem>
}
{
  data.wings_type == "pixie" &&     <SelectItem value="pixie">
  <ColourSelect
    colour="Pixie"
    colourcode="#18B3CF"
  />
</SelectItem>
}
{
  data.wings_type == "monarch" &&     <SelectItem value="monarch">
  <ColourSelect
    colour="Monarch"
    colourcode="#E69110"
  />
</SelectItem>
}

{
  data.wings_type=="feathered" || data.wings_type=="lizard" || data.wings_type == "bat" ? <div>

<SelectItem value="black">
  <ColourSelect
    colour="Black"
    colourcode="black"
  />
</SelectItem>
<SelectItem value="blue">
  <ColourSelect
    colour="Blue"
    colourcode="blue"
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
    colourcode="#493830"
  />
</SelectItem>
<SelectItem value="fur_copper">
  <ColourSelect
    colour="Fur Copper"
    colourcode="#983801"
  />
</SelectItem>
<SelectItem value="fur_gold">
  <ColourSelect
    colour="Fur Gold"
    colourcode="#FCCF56"
  />
</SelectItem>
<SelectItem value="fur_grey">
  <ColourSelect
    colour="Fur Grey"
    colourcode="#54565D"
  />
</SelectItem>
<SelectItem value="fur_tan">
  <ColourSelect
    colour="Fur Tan"
    colourcode="#B78651"
  />
</SelectItem>
<SelectItem value="fur_white">
  <ColourSelect
    colour="Fur White"
    colourcode="#939B9E"
  />
</SelectItem>
<SelectItem value="green">
  <ColourSelect
    colour="Green"
    colourcode="#007100"
  />
</SelectItem>

  </div> : ""
}
   

{data.wings_type == "bat" || data.wings_type=="lizard" ? <div>
  <SelectItem value="amber">
  <ColourSelect
    colour="Amber"
    colourcode="#DA8E4E"
  />
</SelectItem>
<SelectItem value="bright_green">
  <ColourSelect
    colour="Bright Green"
    colourcode="#7BB429"
  />
</SelectItem>
<SelectItem value="bronze">
  <ColourSelect
    colour="Bronze"
    colourcode="#7C4A31"
  />
</SelectItem>
<SelectItem value="brown">
  <ColourSelect
    colour="Brown"
    colourcode="#94613D"
  />
</SelectItem>
<SelectItem value="dark_green">
  <ColourSelect
    colour="Dark Green"
    colourcode="#509C58"
  />
</SelectItem>
<SelectItem value="lavender">
  <ColourSelect
    colour="Lavender"
    colourcode="#5A5D6A"
  />
</SelectItem>
<SelectItem value="light">
  <ColourSelect
    colour="Light"
    colourcode="#FAE8DF"
  />
</SelectItem>
<SelectItem value="olive">
  <ColourSelect
    colour="Olive"
    colourcode="#E4A47C"
  />
</SelectItem>
<SelectItem value="pale_green">
  <ColourSelect
    colour="Pale Green"
    colourcode="#89B47C"
  />
</SelectItem>
<SelectItem value="taupe">
  <ColourSelect
    colour="Taupe"
    colourcode="#C7935F"
  />
</SelectItem>
<SelectItem value="zombie">
  <ColourSelect
    colour="Zombie"
    colourcode="#D5C5A4"
  />
</SelectItem>
<SelectItem value="zombie_green">
  <ColourSelect
    colour="Zombie Green"
    colourcode="#D0D298"
  />
</SelectItem>


</div>:"" }
{data.wings_type=="bat" && <div>
  
  <SelectItem value="ash">
  <ColourSelect
    colour="Ash"
    colourcode="#C89C8C"
  />
</SelectItem>
<SelectItem value="blonde">
  <ColourSelect
    colour="Blonde"
    colourcode="#F7C74F"
  />
</SelectItem>
<SelectItem value="bluegray">
  <ColourSelect
    colour="Blue Gray"
    colourcode="#315747"
  />
  
</SelectItem>
<SelectItem value="carrot">
  <ColourSelect
    colour="Carrot"
    colourcode="#EE6C44"
  />
</SelectItem>
<SelectItem value="charcoal">
  <ColourSelect
    colour="Charcoal"
    colourcode="#3D4348"
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
    colourcode="#5F1F04"
  />
</SelectItem>
<SelectItem value="dark_gray">
  <ColourSelect
    colour="Dark Gray"
    colourcode="#717171"
  />
</SelectItem>

<SelectItem value="forest">
  <ColourSelect
    colour="Forest"
    colourcode="#103A15"
  />
</SelectItem>

<SelectItem value="ginger">
  <ColourSelect
    colour="Ginger"
    colourcode="#FAA301"
  />
</SelectItem>
<SelectItem value="gold">
  <ColourSelect
    colour="Gold"
    colourcode="#FFE453"
  />
</SelectItem>
<SelectItem value="gray">
  <ColourSelect
    colour="Gray"
    colourcode="#AAAAAA"
  />
</SelectItem>
<SelectItem value="leather">
  <ColourSelect
    colour="Leather"
    colourcode="#714526"
  />
</SelectItem>
<SelectItem value="light_brown">
  <ColourSelect
    colour="Light Brown"
    colourcode="#854B17"
  />
</SelectItem>
<SelectItem value="maroon">
  <ColourSelect
    colour="Maroon"
    colourcode="#812121"
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
    colourcode="#E55600"
  />
</SelectItem>
<SelectItem value="pink">
  <ColourSelect
    colour="Pink"
    colourcode="#E95BB7"
  />
</SelectItem>
<SelectItem value="platinum">
  <ColourSelect
    colour="Platinum"
    colourcode="#EDDF95"
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
    colourcode="#061522"
  />
</SelectItem>
<SelectItem value="red">
  <ColourSelect
    colour="Red"
    colourcode="#DE1111"
  />
</SelectItem>
<SelectItem value="redhead">
  <ColourSelect
    colour="Redhead"
    colourcode="#971E1F"
  />
</SelectItem>
<SelectItem value="rose">
  <ColourSelect
    colour="Rose"
    colourcode="#D789A7"
  />
</SelectItem>
<SelectItem value="sandy">
  <ColourSelect
    colour="Sandy"
    colourcode="#E1CC75"
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
    colourcode="#777C7C"
  />
</SelectItem>
<SelectItem value="strawberry">
  <ColourSelect
    colour="Strawberry"
    colourcode="#D4AD15"
  />
</SelectItem>
<SelectItem value="tan">
  <ColourSelect
    colour="Tan"
    colourcode="#B3873C"
  />
</SelectItem>
<SelectItem value="teal">
  <ColourSelect
    colour="Teal"
    colourcode="teal"
  />
</SelectItem>
<SelectItem value="violet">
  <ColourSelect
    colour="Violet"
    colourcode="#5255EF"
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
    colourcode="#CBCECF"
  />
</SelectItem>
<SelectItem value="yellow">
  <ColourSelect
    colour="Yellow"
    colourcode="#F3C03F"
  />
</SelectItem>
  </div>}

  {
 data.wings_type=="feathered" ? <div>
<SelectItem value="ash">
  <ColourSelect
    colour="Ash"
    colourcode="#F6E8AB"
  />
</SelectItem>
<SelectItem value="blonde">
  <ColourSelect
    colour="Blonde"
    colourcode="#FDDA69"
  />
</SelectItem>
<SelectItem value="carrot">
  <ColourSelect
    colour="Carrot"
    colourcode="#CA502B"
  />
</SelectItem>
<SelectItem value="chestnut">
  <ColourSelect
    colour="Chestnut"
    colourcode="#BB5C0C"
  />
</SelectItem>
<SelectItem value="dark_brown">
  <ColourSelect
    colour="Dark Borwn"
    colourcode="#692305"
  />
</SelectItem>
<SelectItem value="dark_gray">
  <ColourSelect
    colour="Dark Gray"
    colourcode="#9E9E9E"
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
    colourcode="#FFAE18"
  />
</SelectItem>
<SelectItem value="gray">
  <ColourSelect
    colour="Gray"
    colourcode="#D9D9D9"
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
    colourcode="#3F54B3"
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
    colourcode="#E94AAE"
  />
</SelectItem>
<SelectItem value="platinum">
  <ColourSelect
    colour="Platinum"
    colourcode="#B6986D"
  />
</SelectItem>
<SelectItem value="purple">
  <ColourSelect
    colour="Purple"
    colourcode="#8850C4"
  />
</SelectItem>
<SelectItem value="raven">
  <ColourSelect
    colour="Raven"
    colourcode="#184E64"
  />
</SelectItem>
<SelectItem value="red">
  <ColourSelect
    colour="Red"
    colourcode="#E41F1A"
  />
</SelectItem>
<SelectItem value="redhead">
  <ColourSelect
    colour="Redhead"
    colourcode="#8C1C1F"
  />
</SelectItem>
<SelectItem value="rose">
  <ColourSelect
    colour="Rose"
    colourcode="#CC789D"
  />
</SelectItem>
<SelectItem value="sandy">
  <ColourSelect
    colour="Sandy"
    colourcode="#F5F4BC"
  />
</SelectItem>

<SelectItem value="strawberry">
  <ColourSelect
    colour="Strawberry"
    colourcode="#C49400"
  />
</SelectItem>
<SelectItem value="violet">
  <ColourSelect
    colour="Violet"
    colourcode="#5255EF"
  />
</SelectItem>
<SelectItem value="white">
  <ColourSelect
    colour="White"
    colourcode="#D3D7D7"
  />
</SelectItem>

 </div> : ""

  }

        </SelectContent>
      </Select>
    ) : (
      ""
    )}

                          </div>
  )
}

export default WingsSidebarContent