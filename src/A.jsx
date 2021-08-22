import { createContext, useState } from "react";
import B from "./B"

let countcontext=createContext();

let A=()=> {
   let [count,setCount]=useState(5);
  return (
     <div>
      <countcontext.Provider value={count}>
     <B />
      </countcontext.Provider>
    </div> 
  );
};

export default A;
export {countcontext};
