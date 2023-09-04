import React, { useEffect, useState } from "react";
import "./RawPost.css";
import Youtube from "react-youtube";
import axios from "../../axios";
import { API_KEY } from "../../constants/constants";
import { imageUrl } from "../../constants/constants";
function RawPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(""); //to store the url
  useEffect(() => {
    axios
      .get(props.urls)
      .then((responce) => {
        console.log(responce.data);
        setMovies(responce.data.results); //to display the posters of the movies
      })
      .catch((err) => {
        //alert("Network Error");
      });
  }, []);
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US'`)
      .then((responce) => {
        if (responce.data.results.length !== 0) {
          setUrlId(responce.data.results[0]); //to store the trailer from youtube
        } else {
          console.log("Empty Array");
          alert("Trailer Unavailable");
        }
      });
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }, //simple window to show the trailer
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          ></img>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div> //the main link where the trailer is played
  );
}

export default RawPost;
