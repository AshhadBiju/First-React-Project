import { useState } from "react"; //importing useState.
import Employee from "./Employee";
function App() {
  const [count, setCount] = useState(0); // declaring useState.
  const addCount = () => {
    // this is how you declare an arrow function, a shorter version of a function.
    setCount(count + 1);
  };
  let emp = [
    // first we create an array of objects
    { name: "Alan", age: 20 },
    { name: "Ashhad", age: 23 },
    { name: "Shahabas", age: 24 },
  ];
  return (
    <div className="App">
      <button onClick={addCount}>Add</button> {/*calling said function*/}
      {emp.map((obj, index) => {
        //then we call the let emp with map and store them in a variable obj in a function
        return <Employee key={index} name={obj.name} age={obj.age} />; //then we call the function Employee.jsx
      })}
    </div>
  );
}

export default App;
