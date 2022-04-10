import React from 'react';
import { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

// A crucial part of building user interfaces: You want
// to let your users know wich state your aplication currently has.
// There is a difference between 'We got no movies', 'We are loading'
// and 'We have movies'.

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true); // Set loading state to TRUE
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    // Could set loading state to FALSE here
    // Because async tasks are done at this point
    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false); // Set loading state to FALSE
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* Using conditional rendering based on loading state
        MoviesList will render only when loading is done */}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
