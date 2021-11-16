import { useEffect, useState } from "react";
import { moviesService } from "../services/moviesService";
import { Toc } from "../cmp/Toc";
import { MovieDetails } from "../cmp/MovieDetails";
import { IoMdFilm } from "react-icons/io";
import loading from "../assets/img/loading.svg";

export const Home = () => {
  const [movies, setMovies] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  useEffect(() => {
    setMoviesData();
  }, []);

  const setMoviesData = async () => {
    const moviesData = await moviesService.getData();
    setMovies(moviesData);
  };

  const onSelectedMovie = (selectedtMovie) => {
    setSelectedMovie(selectedtMovie);
  };

  if (!movies)
    return (
      <p>
        <img src={loading} alt="loading" />
      </p>
    );
  return (
    <div className="home grid">
      <div className="main-toc flex column">
        <h4 className="toc-main-title flex align-center">
          <IoMdFilm /> Movies
        </h4>
        {movies.map((movie, idx) => (
          <Toc movie={movie} key={idx} onSelectedMovie={onSelectedMovie} />
        ))}
      </div>
      <div className="main-movies-container flex column">
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
        {!selectedMovie && <p>No selected movie</p>}
      </div>
    </div>
  );
};
