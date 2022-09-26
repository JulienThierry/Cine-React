import axios from "axios";
import React, { useEffect, useState } from "react";
const Card = ({ movie }) => {
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=880e15e66e34d6cd0b057e8969691538&language=fr-FR"
      )
      .then((res) => setGenres(res.data.genres));
  }, []);

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];

    return day + "/" + month + "/" + year;
  }


  function matchGenre(id) {
    
    let res = genres.map((genres) => {
  
      if(genres.id === id){
         return  genres.name;
      }else return null
       
    })
    return res;
  }

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
      <h2>{movie.title} </h2>
      <ul>
        
        {movie.genre_ids.map((genreId) => { 
          
          return <li>{matchGenre(genreId)}</li>}
        
        )
       }
      </ul>
      <div className="date">
      <h3>Date de sortie : {movie.release_date && formatDate(movie.release_date)  } </h3>
      
        <h4>
        <i className="fa-solid fa-star"></i>
        {movie.vote_average} ({movie.vote_count})</h4></div>
      
      
      <h2>Synopsis</h2>
      <p>{movie.overview}</p>
      <button>En savoir plus</button>
      <i id="heart" className="fa-regular fa-heart heart"></i>
    </div>
  );
};

export default Card;
