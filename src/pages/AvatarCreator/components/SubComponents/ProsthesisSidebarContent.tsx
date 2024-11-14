import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";


const ProsthesisSidebarContent = () => {
    const { setData, data } = useContext(MyContext)!;
  return (
    <div className="mt-1 w-fit h-auto flex flex-col gap-4 ">
                        <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.prosthesis === "none"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                           prosthesis:"none"
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">None</p>
                                  </div>
                        <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.prosthesis === "peg_leg"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                        prosthesis:"peg_leg"
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">Peg Leg</p>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <input
                                      type="checkbox"
                                      checked={
                                        data.prosthesis === "hook"
                                      }
                                      onChange={() =>
                                        setData({
                                          ...data,
                                          prosthesis: "hook",
                                        })
                                      }
                                      className="size-4"
                                    />
                                    <p className="font-medium">Hook</p>
                                  </div>
                        </div>
                        </div>
  )
}

export default ProsthesisSidebarContent