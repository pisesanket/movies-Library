import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onClick }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '16px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  const posterStyle = {
    width: '100%',
    height: 'auto',
  };

  const titleStyle = {
    fontSize: '1.2em',
    margin: '8px 0',
    color:'black',
  };

  const detailStyle = {
    margin: '4px 0',
    color:'black',
    fontSize: '1em',
    fontweight: 'bold',

  };
  const linkstyle = {
    textDecoration: 'none',
  }
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="movie-card" onClick={onClick} style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <Link to={`/movie/${movie.id}`} style={linkstyle}>
        <img src={movie.Poster} alt={movie.Title} className="movie-image" style={posterStyle} />
        <p className="movie-name" style={titleStyle}>{movie.Title}</p>
        <p className="movie-year" style={detailStyle}>{movie.Year}</p>
        <p className="movie-type" style={detailStyle}>{movie.Type}</p>
        <p className="movie-rating" style={detailStyle}>{movie.rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
