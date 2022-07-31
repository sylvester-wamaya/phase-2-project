import React from 'react';
import MovieControls from './MovieControls';

function MovieCard({type, movie}){ return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img src={movie}/>

      <MovieControls type={type} movie={movie} />
    </div>
  );
}

export default MovieCard
