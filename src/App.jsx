import { useState } from "react"; //importing useState
function App() {
  const [count, setCount] = useState(0); // declaring useState
  const addCount = () => {
    // this is how you declare an arrow function, a shorter version of a function.
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="App">
      <button onClick={addCount}>Add</button> {/*calling said function*/}
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;
