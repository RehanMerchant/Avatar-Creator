import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";


const HeadTypeSidebar = () => {
    const { setData, data } = useContext(MyContext)!;
  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
        <p className="font-medium">Head Enhancement</p>
    <div className="flex flex-col gap-2">
        
    <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          disabled={data.body_type=="child" || data.body_type =="teen"}
          checked={data.head_type === "male" || data.head_type === "female"  || data.head_type === "child" || data.head_type===""}
          onChange={() =>
           {if(data.body_type=="male"){
                setData({ ...data, head_type: "male" })
            }
            else if(data.body_type=="female"){
                setData({ ...data, head_type: "female" })
            }
        
        }
           
          }
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          disabled={data.body_type=="child" || data.body_type =="teen"}
          checked={data.head_type === "elderly"}
          onChange={() =>
            setData({ ...data, head_type: "elderly" })
          }
          className="size-4"
        />
        <p className="font-medium">Elderly</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          disabled={data.body_type=="child" || data.body_type =="teen"}
          checked={data.head_type === "small"}
          onChange={() =>
            setData({ ...data, head_type: "small" })
          }
          className="size-4"
        />
        <p className="font-medium">Small</p>
      </div>
      </div>
      </div>
  )
}

export default HeadTypeSidebar