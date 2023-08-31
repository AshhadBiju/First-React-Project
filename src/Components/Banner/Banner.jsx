import React from "react";
import { API_KEY } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";
import { useEffect } from "react";
function Banner() {
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((responce) => {
        console.log(responce.data);
      }); //this is the imp bit, use `` or called backtick to edit the URL. Use $ before API_KEY to import the same into the URL. Use .then to store the data in responce and then console logged it.
  }, []);
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          Enthekilum okke ang ittekk deyy, ith Netflix alle, veronnum allallo
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
