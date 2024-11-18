
import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
const Eyessidebar = () => {
     const { setData, data } = useContext(MyContext)!;
  return (
  
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "default"}
          onChange={() =>
            setData({ ...data, eyes_colour: "default" })
          }
          className="size-4"
        />
        <p className="font-medium">Default</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "blue"}
          onChange={() =>
            setData({ ...data, eyes_colour: "blue" })
          }
          className="size-4"
        />
        <p className="font-medium">Blue</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "brown"}
          onChange={() =>
            setData({ ...data, eyes_colour: "brown" })
          }
          className="size-4"
        />
        <p className="font-medium">Brown</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour==="gray"}
          onChange={() =>
            setData({ ...data, eyes_colour: "gray" })
          }
          className="size-4"
        />
        <p className="font-medium">Gray</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour==="green"}
          onChange={() =>
            setData({ ...data,eyes_colour: "green" })
          }
          className="size-4"
        />
        <p className="font-medium">Green</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "orange"}
          onChange={() =>
            setData({ ...data, eyes_colour: "orange" })
          }
          className="size-4"
        />
        <p className="font-medium">Orange</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "purple"}
          onChange={() =>
            setData({ ...data, eyes_colour: "purple" })
          }
          className="size-4"
        />
        <p className="font-medium">Purple</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "red"}
          onChange={() =>
            setData({ ...data, eyes_colour: "red" })
          }
          className="size-4"
        />
        <p className="font-medium">Red</p>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.eyes_colour === "yellow"}
          onChange={() =>
            setData({ ...data, eyes_colour: "yellow" })
          }
          className="size-4"
        />
        <p className="font-medium">Yellow</p>
      </div>

    </div>
  </div>

  )
}

export default Eyessidebar