import React from "react";

function Counter({ title, count }) {
  //props can also be declared like this
  return (
    <div>
      <h1>
        {title}
        {count}
      </h1>
      {/*the count should be displayed here as props*/}
    </div>
  );
}

export default Counter;
