import { useState, useEffect } from "react";
import React from "react";

function Counter() {
  useEffect(() => {
    console.log("Mounting...");
    return () => {
      console.log("Un-mounting...");
    };
  });
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Show the count:{count}</h1>
    </div> //This is called updating the value
  );
}

export default Counter;
