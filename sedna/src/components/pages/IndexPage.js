import React from "react";
import "./IndexPage.css";
import { useEffect, useState } from "react";

export const IndexPage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://6357f067c27556d289325a88.mockapi.io/api/v1/films")
      .then((response) => response.json())
      .then((json) => setFilms(json))
      
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addTag = (event) => {
    event.preventDefault()
    
  }

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
            <form className="addTag" onSubmit = {addTag}>
              <input
                className="inputField"
                name="tag"
                placeholder="type your tag"
              />
              <input className="button" type="Submit" value="Add Tag" />
            </form>
          </div>
        );
      })}
    </div>
  );
};
