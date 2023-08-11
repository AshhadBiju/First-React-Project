import React from "react";

function Employee(props) {
  return (
    <div>
      <h1>
        Name:{props.name} , Age: {props.age}
        {/*then we call name and age declared in App.jsx*/}
      </h1>
    </div>
  );
}

export default Employee;
