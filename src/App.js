import React from 'react';
import { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

// Fetch is a built in browser API for getting data from a backend

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    // Asyncronous method wich returns a promise
    fetch('https://swapi.dev/api/films/')
      // Returns an object 'response' with useful data and methods
      .then(response => {
        // Use json() method to transform json into js usable object
        // This method returns a promise
        return response.json();
      })
      .then(data => {
        // Create a new object from data.results extracting and reformatting some data
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
