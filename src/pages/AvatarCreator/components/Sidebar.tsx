import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import { MyContext } from "@/context/AvatarDataContext";
import { useContext } from "react";
import SidebarBodySelector from "./SubComponents/SidebarBodySelector";
import TailCOntentSidebar from "./SubComponents/TailCOntentSidebar";
import WingsSidebarContent from "./SubComponents/WingsSidebarContent";
import ProsthesisSidebarContent from "./SubComponents/ProsthesisSidebarContent";
import { SidebarCustomHead } from "./SubComponents/SidebarCustomHead";
import EarSidebar from "./SubComponents/EarSidebar";
import HornsSidebar from "./SubComponents/HornsSidebar";
import HeadTypeSidebar from "./SubComponents/HeadTypeSidebar";
import NoseSidebar from "./SubComponents/NoseSidebar";
import HairSidebarCOntent from "./SubComponents/HairSidebarCOntent";
import Eyessidebar from "./SubComponents/Eyessidebar";







const Sidebar = () => {
  const { data } = useContext(MyContext)!;
   


  return (
    <aside className="h-full w-full bg-neutral-900 px-3 py-1 overflow-auto no-scrollbar">
      <div className="w-full h-auto py-1">
        <Accordion  type="multiple" className="w-full mt-1">
          <AccordionItem value="body_type">
            <AccordionTrigger>Body Type</AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 flex flex-col gap-5">
           
                  <SidebarBodySelector/>
                
                <div className="w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Tail</AccordionTrigger>
                      <AccordionContent>
                        <TailCOntentSidebar/>
                      </AccordionContent>
                    </AccordionItem>
                    {data.body_type != "child" ? (
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Wings</AccordionTrigger>
                        <AccordionContent>
                          <WingsSidebarContent/>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      ""
                    )}
                   { data.body_type=="male" || data.body_type=="muscular" ?  <AccordionItem value="item-3">
                      <AccordionTrigger>Prosthesis</AccordionTrigger>
                      <AccordionContent>
                     <ProsthesisSidebarContent/>
                      </AccordionContent>
                    </AccordionItem>:''}
                  </Accordion>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="head">
          <AccordionTrigger>Head</AccordionTrigger>
          <AccordionContent>
          <div className="mt-2 flex flex-col gap-5">
            <SidebarCustomHead/>
            {data.body_type=="child" || data.body_type=="teen" || data.head_type=="custom" ? '':
            <HeadTypeSidebar/>}
            <Accordion type="single" collapsible>
           {  data.head_type=="custom" ? '' : <AccordionItem value="ears">
              <AccordionTrigger>
                Ears
              </AccordionTrigger>
              <AccordionContent>
              <EarSidebar/>
              </AccordionContent>
            </AccordionItem>}

            {  data.head_type=="custom" ? '' : <AccordionItem value="eyes">
              <AccordionTrigger>
                Eyes
              </AccordionTrigger>
              <AccordionContent>
              <Eyessidebar/>
              </AccordionContent>
            </AccordionItem>}

              <AccordionItem value="horns">
                <AccordionTrigger>
                 Horns
                </AccordionTrigger>
                <AccordionContent>
                 <HornsSidebar/>
                </AccordionContent>
              </AccordionItem>
           {  data.body_type=="child" || data.head_type=="custom" ? '' : <AccordionItem value="nose">
                <AccordionTrigger>
                 Nose
                </AccordionTrigger>
                <AccordionContent>
                 <NoseSidebar/>
                </AccordionContent>
              </AccordionItem>}

         {  data.body_type=="child" || data.head_type=="custom" ? '' :    <AccordionItem value="hair">
                <AccordionTrigger>
                 Hair
                </AccordionTrigger>
                <AccordionContent>
                <HairSidebarCOntent/>
                </AccordionContent>
              </AccordionItem>}

            </Accordion>
            </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};

export default Sidebar;
