import { useEffect, useState } from "react";
import { moviesService } from "../services/moviesService";
import { Toc } from "../cmp/Toc";
import { MoviesPreview } from "../cmp/MoviesPreview";
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
      <div>
        {movies.map((movie, idx) => (
          <Toc movie={movie} key={idx} />
        ))}
      </div>
      <div>
        {movies.map((movie, idx) => (
          <MoviesPreview movie={movie} key={idx} />
        ))}
      </div>
    </div>
  );
};
