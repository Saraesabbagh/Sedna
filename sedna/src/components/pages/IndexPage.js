import React from "react";
import "./IndexPage.css";
import { useEffect, useState } from "react";
import { AddTag } from "../atomic/AddTag";

// import Axios from "axios";
// import { json } from "react-router-dom";

export const IndexPage = () => {
  const [films, setFilms] = useState([]);
  const [tags, setTags] = useState({ ready: false });
  // const [localStorage, setLocalStorage] = useState([]);

  useEffect(() => {
    fetch("https://6357f067c27556d289325a88.mockapi.io/api/v1/films")
      .then((response) => response.json())
      .then((json) => setFilms(json))
      // .then((json) => handleResponse(json))
      .catch((err) => {
        // console.log(err.message);
      });
  }, []);

  
   useEffect(() => {
      localStorage.setItem("dataKey", JSON.stringify(tags));
    }, [tags]);
   
  

  console.log(localStorage);

  // useEffect(() => {
  //   fetchFilms();
  // }, [films]);

  // const fetchFilms = async () => {
  //   const response = await Axios(
  //     "https://6357f067c27556d289325a88.mockapi.io/api/v1/films"
  //   );
  //   setFilms(response.data);

  // };

  return (
    <div className="wholePage-container">
      <h1>Film list</h1>
      <span>
        <form>
          <input
            className="inputField"
            name="search"
            placeholder="🔍 Search tags"
          />
          <input className="button" type="Submit" value="search" />
        </form>
      </span>

      {films.map((film) => {
        return (
          <div className="filmContainer">
            <h5>{film.title}</h5>
            <p>{film.description}</p>
            <p>{film.released}</p>
            <p>{film.tags}</p>
            <AddTag film_id={film.id} setTags={setTags}/>
            
            
          </div>
        );
      })}
    </div>
  );
};
