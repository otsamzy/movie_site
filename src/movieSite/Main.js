import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { NavLinks } from "../NavLinks";
import { v4 as uuidv4 } from "uuid";

const API_KEY = "&api_key=2b8775e14524bcd498964ca646e8821d";
const base_Url = "https://api.themoviedb.org/3";
let url = base_Url + "/discover/movie?sort_by=popularity.desc" + API_KEY;

const Main = () => {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [mainUrl, setMainUrl] = useState(url);
  const [error, setError] = useState(false);

  useState(() => {
    fetch(mainUrl)
      .then((data) => {
        if (data.status > 199 && data.status <= 299) {
          return data.json();
        } else {
          setError(true);
          throw new Error(data.statusText);
        }
      })
      .then((movie) => {
        setMovieData(movie.results);
      });
  }, [mainUrl]);

  return (
    <>
      <div className="header">
        <div className="links_wrapper">
          {NavLinks.map((links) => {
            return (
              <nav className="nav_container" key={uuidv4()}>
                <ul className="nav_list">
                  <li className="nav_link">
                    <a href="#" name={links}>
                      {links}
                    </a>
                  </li>
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="search_container">
          <input
            className="search_input"
            name="search"
            id="search"
            placeholder="enter movie name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="icon_con">
            <svg
              className="search_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <section className="Movie_container">
        {movieData.length === 0 ? (
          <p>try again </p>
        ) : (
          <MovieCard info={movieData} />
        )}
        {error ? <h1>no network</h1> : ""}
      </section>
    </>
  );
};

export default Main;
