import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Show the count:{count}</h1>
    </div> //This is called updating the value
  );
}

export default Counter;
