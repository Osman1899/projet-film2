import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FilmDetail from './components/FilmDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialFilmsData = [
  {
    id: 1,
    title: 'Breaking Bad',
    rating: 9.8,
    description: 'A high school chemistry teacher turned methamphetamine manufacturer...',
    posterURL: 'https://static.tvtropes.org/pmwiki/pub/images/screenshot_2023_08_30_at_16_21_31_ems_3jpg_webp_image_1400_2100_pixels_scaled_35.png',
    trailerURL: 'https://youtu.be/HhesaQXLuRY?si=YkG1Lq1r3Ld6cx3f' 
  },
  {
    id: 2,
    title: 'Prison Break',
    rating: 9.7,
    description: 'A structural engineer named Michael Scofield devises an elaborate plan...',
    posterURL: 'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
    trailerURL: 'https://youtu.be/AL9zLctDJaU?si=mAxG2PmTUnnWQgB3' 
  },
  {
    id: 3,
    title: 'Gomorra',
    rating: 9.0,
    description: 'En Italie, la famille Savastano dirigée par Don pietro domine la mafia napolitaine...',
    posterURL: 'https://italyformovies.it/app/img/film/locandine/gomorra_la_serie_locandina_1546942595.webp',
    trailerURL: 'https://youtu.be/pB6Mfu-87QI?si=yDl_pZsJnWqGKtiG' 
  },
];

const App = () => {
  const [films, setFilms] = useState(initialFilmsData);
  const [filteredFilms, setFilteredFilms] = useState(initialFilmsData);

  const handleFilter = ({ title, rating }) => {
    setFilteredFilms(
      films.filter(
        (film) =>
          film.title.toLowerCase().includes(title.toLowerCase()) &&
          (!rating || film.rating >= rating)
      )
    );
  };

  const handleAddFilm = (newFilm) => {
    const updatedFilms = [...films, newFilm];
    setFilms(updatedFilms);
    setFilteredFilms(updatedFilms);
  };

  return (
    <Router>
      <div className="App">
        <h1>Cinema App</h1>
        <Routes>
          <Route path="/" element={<Home films={films} filteredFilms={filteredFilms} handleFilter={handleFilter} handleAddFilm={handleAddFilm} />} />
          <Route path="/film/:id" element={<FilmDetail films={films} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
