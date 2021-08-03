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
        rollno:230,
    };
    render=()=>{
        return(
            <div>
            <h>my roll number is {this.state.rollno}</h>
            </div>
        );
    };
}
export default Mycomp;