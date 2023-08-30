import React from "react";
import axios from "axios"; //this is needed as to import axios library
import "./App.css";
import { useState } from "react"; //need useState to display the data
function App() {
  const [state, setState] = useState([]); //declare as empty array to store the data and display it
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts") // this is the default way of API call
            .then((responce) => {
              console.log(responce.data); //this is to know whether the data is brought in using console
              setState(responce.data); //this step is important as JSON data is stored in state using setState function
            });
        }}
      >
        Click me
      </button>
      {state.map((obj, index) => {
        // map is used here to loop and store the JSON data in obj with index
        return (
          //the below is used to display the data
          <div>
            <h1>{index + 1}</h1>
            <h1>{obj.title}</h1>
            <h4>{obj.body}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
