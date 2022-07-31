import React from 'react';
import MovieControls from './MovieControls';

function MovieCard({type, image, movie}){ return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img src={image}/>

      <MovieControls type={type} movie={movie} />
    </div>
  );
}

export default MovieCard
