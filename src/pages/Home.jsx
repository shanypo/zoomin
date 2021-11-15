import { useEffect, useState } from "react";
import { moviesService } from "../services/moviesService";
import { Toc } from "../cmp/Toc";
import { MoviesPreview } from "../cmp/MoviesPreview";
import { IoMdFilm } from "react-icons/io";

export const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    setMoviesData();
  }, []);

  const setMoviesData = async () => {
    const moviesData = await moviesService.getData();
    setMovies(moviesData);
  };

  if (!movies) return <p>Loading...</p>;
  return (
    <div className="home grid">
      <div className="main-toc flex column">
        <h4 className="toc-main-title flex align-center">
          <IoMdFilm /> Movies
        </h4>
        {movies.map((movie, idx) => (
          <Toc movie={movie} key={idx} />
        ))}
      </div>
      <div className="main-movies-container flex column">
        {movies.map((movie, idx) => (
          <MoviesPreview movie={movie} key={idx} />
        ))}
      </div>
    </div>
  );
};
