
import { useEffect, useState } from 'react';

let App=()=> {
 
  let [count,setCount]=useState(0);
  let [process,setProcess]=useState("running");
  console.log("render is called");
  //case:1
    useEffect(()=>{
    console.log("case 1 onw time");
    return (()=>{
      console.log("cleanup fun");
    });
  },[]);  

  //case:2
   useEffect(()=>{
     console.log("case 2 every time");
     
   })
  
   //case:3
    /* useEffect(()=>{
     console.log("case:3 passed state change ke baad");
   },[process]);  */

  return (
     <div className="App">
      <button onClick={(e)=>{
        setCount(count+1)
      }} >+</button> 
      <h1>{count}</h1>
       <button onClick={(e)=>{
        setCount(count-1)
      }} >-</button>

      <p>{process}</p>
      <button onClick={()=>{
        setProcess("stop");
      }}>stop</button>

    </div> 
  );
};

export default App;
