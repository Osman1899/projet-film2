import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
  return (
    <div className="card">
      <img src={film.posterURL} className="card-img-top" alt={film.title} />
      <div className="card-body">
        <h5 className="card-title">{film.title}</h5>
        <p className="card-text">{film.description}</p>
        <Link to={`/film/${film.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default FilmCard;
