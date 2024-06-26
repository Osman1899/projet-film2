
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = ({ films }) => {
  const { id } = useParams();
  const film = films.find(film => film.id === parseInt(id));

  if (!film) return <h2>Film not found</h2>;

  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <iframe width="560" height="315" src={film.trailerURL} title={film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FilmDetail;
