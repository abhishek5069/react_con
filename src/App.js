
import { useEffect, useState } from 'react';

let App=()=> {
 
  let [count,setCount]=useState(0);
  console.log("render is called");

  useEffect(()=>{
    console.log("should be run one time");
  },[]);

  return (
     <div className="App">
      <button onClick={(e)=>{
        setCount(count+1)
      }} >+</button> 
      <h1>{count}</h1>
       <button onClick={(e)=>{
        setCount(count-1)
      }} >-</button>
    </div> 
  );
};

export default App;
