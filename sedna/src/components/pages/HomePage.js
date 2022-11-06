import React from "react";
import "./HomePage.css";
import { useEffect, useState, useMemo } from "react";


export const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [tags, setTags] = useState([]);

  // const [localStorage, setLocalStorage] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTag, setSearchedTag] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  

  useEffect(() => {
    fetch("https://6357f067c27556d289325a88.mockapi.io/api/v1/films")
      .then((response) => response.json())
      .then((json) => setFilms(json))
      .catch((err) => {
      });
  }, []);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    if (tags.length < 5) {
      setTags([...tags, value]);
      e.target.value = "";
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  const search = (searchTerm)=> {
    return films.filter((film) => tags.toLowerCase().include(searchTerm.toLowerCase()))
  }
  
  


  return (
    <div className="wholePage-container">
      <h1>Film list</h1>
      <span>
          <input
            className="inputField"
            type="text"
            name="searchFilms"
            placeholder="🔍 Search tags"
            value ={searchTerm}
            onChange={(event)=> {
              setSearchTerm(event.target.value);
            }}
          />
    
     </span>
  

     

      {films.map((film, index) => {
        return (
          <div className="filmContainer" key={index}>
            <h5>{film.title}</h5>
            <p>{film.description}</p>
            <p>{film.released}</p>
            <p>{film.tags}</p>
            <div className="tags-input-container">
              {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                  <span className="text">{tag}</span>
                  <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
              ))}
              <input
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="type tag and hit enter"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
