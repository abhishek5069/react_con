//THERE ARE TWO METHODS TO DO:
  //first function method -> isme state na hoti
/* let Mycomp=()=>{
    return(
        <div>
            <h>hello pushkar</h>
            <p>this is my second paragraph</p>
        </div>
    );
};

export default Mycomp; */

  //second class method -> isme state hoti hai, ek comp m ek state only,sate is a data peice of comp
import React from "react";

class Mycomp extends React.Component{
    state={
        number1:0,
        number2:50,
    };
    render=()=>{
        return(
            <div>
            <button onClick={()=>{
                this.setState({number1:this.state.number1+1})
            }}>increment</button>
            <h1>{this.state.number1}</h1>

            <button onClick={()=>{
                this.setState({number2:this.state.number2-1})
            }}>decrement</button>
            <h2>{this.state.number2}</h2>
            </div>
        );
    };
}
export default Mycomp;