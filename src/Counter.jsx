import React from "react";

function Counter(props) {
  const { title, count } = props;
  //props is declared
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
