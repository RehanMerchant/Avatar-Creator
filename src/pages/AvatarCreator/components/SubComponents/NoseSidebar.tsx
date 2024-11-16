import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";

const NoseSidebar = () => {

    const { setData, data } = useContext(MyContext)!;
  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.nose == "none"}
          onChange={() => setData({ ...data, nose:"none" })}
          className="size-4"
        />
        <p className="font-medium">None</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.nose == "big"}
          onChange={() => setData({ ...data, nose: "big" })}
          className="size-4"
        />
        <p className="font-medium">Big</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.nose == "button"}
          onChange={() => setData({ ...data, nose: "button" })}
          className="size-4"
        />
        <p className="font-medium">Button</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.nose == "elderly"}
          onChange={() => setData({ ...data, nose: "elderly" })}
          className="size-4"
        />
        <p className="font-medium">Elderly</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.nose == "large"}
          onChange={() => setData({ ...data, nose: "large" })}
          className="size-4"
        />
        <p className="font-medium">Large</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.nose == "straight"}
          onChange={() => setData({ ...data, nose: "straight" })}
          className="size-4"
        />
        <p className="font-medium">Straight</p>
      </div>
    </div>
  </div>
  )
}

export default NoseSidebar