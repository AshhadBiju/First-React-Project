import React from "react";
import Counter from "./Counter";
import { useState } from "react"; //first import the useState
function App() {
  const [state, setState] = useState(false); //this is how to define useState and input as false
  return (
    <div className="App">
      <h1 onClick={() => setState(!state)}>Show/Hide</h1>{" "}
      {/*When we click this the setState function will work*/}
      {state ? <Counter /> : null}
    </div> // this is used to put the ternary operator of if statement. If state is true then Counter function will work or else null.
  );
}

export default App;
