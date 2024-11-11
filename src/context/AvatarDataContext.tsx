import React, { createContext,  useState } from 'react';

interface MyContextType {
    data:{
    body_type:string,
    body_colour:string,
    head_type:string,
    tail_type:string
  }
  setData: (newData:{body_type:string,body_colour:string,head_type:string,tail_type:string}) => void;
}

const MyContext = createContext<MyContextType | null>(null);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({
    body_type:"male",
    body_colour:"light",
    head_type:"",
    tail_type:"none",
  });

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };