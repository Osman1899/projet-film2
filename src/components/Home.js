import React from 'react';
import FilmList from './FilmList';
import Filter from './Filter';
import AddFilm from './AddFilm';

const Home = ({ films, filteredFilms, handleFilter, handleAddFilm }) => {
  return (
    <div>
      <AddFilm onAdd={handleAddFilm} />
      <Filter onFilter={handleFilter} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default Home;
