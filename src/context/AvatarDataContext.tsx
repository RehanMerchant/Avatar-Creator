import React, { createContext,  useState } from 'react';

interface MyContextType {
    data:{
    body_type:string,
    body_colour:string,
    head_type:string,
    custom_head:string,
    tail_type:string,
    tail_colour:string,
    wings_type:string,
    wings_colour:string,
    wings_opacity:string,
    prosthesis:string
  }
  setData: (newData:{body_type:string,body_colour:string,head_type:string,tail_type:string,tail_colour:string,wings_type:string, wings_colour:string, wings_opacity:string,prosthesis:string,custom_head:string,}) => void;
}

const MyContext = createContext<MyContextType | null>(null);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({
    body_type:"male",
    body_colour:"light",
    head_type:"",
    custom_head:"",
    tail_type:"none",
    tail_colour:"ash",
    wings_type:"none",
    wings_colour:"",
    wings_opacity:"solid",
    prosthesis:"none"
  });

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };