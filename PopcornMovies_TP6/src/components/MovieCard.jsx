import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imagesURL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, showLink = true, addToFavorites }) => {
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    addToFavorites(movie);
    navigate("/favorites");
  };

  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img src={`${imagesURL}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <p>No image available</p>
      )}
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && (
        <>
          <button onClick={handleAddToFavorites}>Adicionar aos Favoritos</button>
          <Link to={`/movie/${movie.id}`}>Detalhes</Link>
        </>
      )}
    </div>
  );
};

export default MovieCard;
