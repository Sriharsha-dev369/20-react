import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>You'r favourites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="favorites-empty">
        <h2>No favorite movie yet</h2>
        <p>start adding movies to favourite and they will appear here</p>
      </div>
    </>
  );
}

export default Favorites;
