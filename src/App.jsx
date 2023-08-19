import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]); //we assign an empty array here, reason why is that
  const [toDo, setToDo] = useState(""); //instead of array, double quotes are used. Reason is that
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Ummmm lamest to-do youll see</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)} //this is to target the value
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={
            () =>
              setToDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]) // here there's an id, already value set to string, here changed to text, status default is set to false
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          //then we map the whole thing into obj
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked); //when the target value is checked in console log
                    console.log(obj);
                    setToDos(
                      //using setToDos we filter the obj, also check if obj2 id is equal to obj id
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        <h3>Completed tasks</h3>
        {toDos.map((obj) => {
          //the completed tasks with the data is displayed ie, obj text
          if (obj.status) {
            return (
              <div>
                <h2>{obj.text}</h2>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
