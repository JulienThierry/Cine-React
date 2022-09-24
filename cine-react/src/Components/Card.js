import React from "react";
const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "../public/unavailable.jpg"
        }
        alt={"affiche de " + movie.title}
      />
      <h2>{movie.title}</h2>
      <h3>Date de sortie : {movie.release_date}</h3>
      <h4>
        <i className="fa-solid fa-star"></i>
        {movie.vote_average} ({movie.vote_count})
      </h4>
      <h2>Synopsis</h2>
      <p>{movie.overview}</p>
      <button>En savoir plus</button>
      <i id="heart" className="fa-regular fa-heart heart"></i>
    </div>
  );
};

export default Card;
