import { useState } from "react"; //importing useState
import Counter from "./Counter";
function App() {
  const [count, setCount] = useState(0); // declaring useState
  const addCount = () => {
    // this is how you declare an arrow function, a shorter version of a function.
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={addCount}>Add</button> {/*calling said function*/}
      <Counter title="1st counter" count={count} />
      <Counter title="2nd counter" count={count} />
    </div>
  );
}

export default App;
