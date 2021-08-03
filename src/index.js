// Libraries hai ye

import React from "react"; // creation logic

import ReactDOM from "react-dom"; // render logic

//App is a component we have imported
import App from "./App";
import Mycomp from "./Mycomp"

ReactDOM.render(
                //<App />, // ek component
                <div>
                 <Mycomp />
                 <hr />
                 <Mycomp />
                 <hr />
                 <Mycomp />
                 <hr />
                 <Mycomp />
                 <hr />
                 <Mycomp />
                </div>,
                 document.querySelector("#root") // aur ek jagah jha us component ko dikhana hai
                 );