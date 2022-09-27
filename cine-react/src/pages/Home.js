import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Card from "../Components/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    search &&
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=880e15e66e34d6cd0b057e8969691538&language=fr-FR&query=" +
            search
        )
        .then((res) => setMovies(res.data.results));
  }, [search]);

  return (
    <div>
      <Header />
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Chercher le nom d'un film... "
        />
        <button>Top</button>
        <button>Flop</button>
      </div>

      <div className="movies">
        {movies && movies.map((movie) => <Card movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Home;
