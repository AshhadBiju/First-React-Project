import React from "react";
import Counter from "./Counter";
import { useState } from "react"; //first import the useState
function App() {
  const [state, setState] = useState(false); //this is how to define useState and input as false
  return (
    <div className="App">
      <h1 onClick={() => setState(!state)}>Show/Hide</h1>{" "}
      {/*When we click this the setState function will work*/}
      {state && <Counter />}
    </div> // this is used to put the ternary operator of if statement. If state is true then Counter function will work or else null. && is used so that it works only if both stae and counter is true.
  ); //when we click Show/Hide, the Hello I am Component is put, it's called mounting. Click again, it's gone, the component disappears, it's called un-mounting.
}

export default App;
