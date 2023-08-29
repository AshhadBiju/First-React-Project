import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RawPost from "./Components/RawPost/RawPost";
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RawPost />
    </div>
  );
}

export default App;
