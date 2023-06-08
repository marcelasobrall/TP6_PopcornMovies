import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./Favorites.css";

const Favorites = ({ favorites, toggleFavorite }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    setFavoriteMovies(favorites);
  }, [favorites]);

  const removeFavorite = (movie) => {
    toggleFavorite(movie);
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== movie.id)
    );
  };

  return (
    <div className="container">
      <h2 className="title">Filmes Favoritos:</h2>
      <div className="movies-container">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <MovieCard movie={movie} showLink={false} />
              <button onClick={() => removeFavorite(movie)}>
                Remover dos Favoritos
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum filme favorito adicionado.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
