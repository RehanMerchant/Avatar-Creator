import { MyProvider } from "@/context/AvatarDataContext";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";


const AvatarCreatorPage = () => {
  return (
    <MyProvider>
      <section className="h-svh w-screen md:flex flex-col  bg-neutral-950 text-white ">


       <div className="w-full flex h-[40%] md:h-screen md:w-[calc(100vw-290px)] md:ml-[290px] justify-center items-center">
       <Canvas/>
       </div>
       <div className="h-[60%] md:h-screen md:w-[290px] md:absolute w-full">
         <Sidebar/>
       </div>

    
      </section>
    </MyProvider>
  );
};

export default AvatarCreatorPage;
