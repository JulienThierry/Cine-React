import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Card from "../Components/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType]= useState("");

  
  
    
  

  useEffect(() => {
    function sortMovies(tab) {

      if(sortType === "flop"){
    
         return tab.sort((a, b) => a.vote_average - b.vote_average)
         
      }else if (sortType === "top"){
        
          return tab.sort((a, b) => b.vote_average - a.vote_average)
      }else {
        return tab
      }
    }
    search &&
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=880e15e66e34d6cd0b057e8969691538&language=fr-FR&query=" +
            search
        ).then((res) => sortMovies(res.data.results))
        .then((res) => setMovies(res));
  
  }, [search, sortType]);

  return (
    <div>
      <Header />
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Chercher le nom d'un film... "
        />
        <button onClick={() => setSortType("top")}>Top <i className="fa-solid fa-arrow-up"></i></button>
        <button onClick={() => setSortType("flop")}>Flop <i className="fa-solid fa-arrow-down"></i></button>
      </div>

      <div className="movies">
        
        {movies && movies.map((movie) => <Card movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Home;
