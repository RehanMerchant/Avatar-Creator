
import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
const EarSidebar = () => {

    const { setData, data } = useContext(MyContext)!;
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
  </div>

  )
}

export default EarSidebar