import React from "react";

function Counter({ title, ...obj }) {
  //props can also be declared like this, this way is rest method
  return (
    <div>
      <h1>
        {title}
        {obj.count}
      </h1>
      {/*the count should be displayed here as props, rest props*/}
    </div>
  );
}

export default Counter;
