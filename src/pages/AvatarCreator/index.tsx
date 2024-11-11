import { MyProvider } from "@/context/AvatarDataContext";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";

const AvatarCreatorPage = () => {
  return (
    <MyProvider>
      <section className="h-screen w-screen bg-neutral-950 flex text-white ">
        <Sidebar />
        <div className="w-[calc(100vw-290px)] h-screen bg-neutral-950 flex justify-center  items-center">
          <Canvas />
        </div>
      </section>
    </MyProvider>
  );
};

export default AvatarCreatorPage;
