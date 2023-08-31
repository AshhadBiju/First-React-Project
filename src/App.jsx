import React from "react";
import axios from "axios"; //this is needed as to import axios library
import "./App.css";
import { useState } from "react"; //need useState to display the data
import NavBar from "./Components/NavBar/NavBar";
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
