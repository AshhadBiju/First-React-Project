import "./App.css";
import Header from "./components/Header"; // This is how you import a .js file.
function App() {
  const anydata = " --> any and every data can be displayed here"; // This is to declare a variable in const
  return (
    <div>
      <Header anydata={anydata} />
      {/*The is how you call said function, can aslo be called multiple times, const data is also called here*/}
      <p>This is the data in the variable {anydata}</p>
      {/* This is how you call the variable in const*/}
    </div>
  );
}

export default App;
