
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetailsPage = () => {
  const { id } = useParams();
  

  const movies = useSelector((state) => state.movies.movies);
  
  
  const movie = movies.find((movie) => movie.id === parseInt(id));

  
  // console.log(movies);
  // console.log(movie);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h3 className="movie-id">{movie.id}</h3>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <h2 className="movie-name">{movie.Title}</h2>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieDetailsPage;
