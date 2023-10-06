import React from "react";

const MovieCard = (movies) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const movieMap = movies.info.map((movie) => {
    return (
      <div className="movie_card" key={movie.id}>
        <div className="image">
          <img src={img_path + movie.poster_path} alt="movie_poster" />
        </div>
        <div className="move_details_con">
          <div className="movie_box">
            <p className="movie_name">{movie.title}</p>
            <p className="movie_rating">{movie.vote_average}</p>
          </div>
          <div className="movie_details">
            <p className="details">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  });
  console.log(movies.info);
  return (
    <>
      <section className="movie_list">{movieMap}</section>
    </>
  );
};

export default MovieCard;
