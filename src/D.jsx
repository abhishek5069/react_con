import { useContext } from "react";
import {countcontext} from "./A";

let D=()=> {
    let value=useContext(countcontext);
    return (
       <div>
       {value}
      </div> 
    );
  };
  
  export default D;