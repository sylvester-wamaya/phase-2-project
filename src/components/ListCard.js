import React, { useContext } from "react";
import {GlobalContext} from "../context/GlobalState";


function ListCard({ image, title, movie }){
  
const {
    addMovieToWatchlist, watchlist, watched, addMovieToWatched
} = useContext(GlobalContext);
let storedMovie = watchlist.find(obj=>obj.id===movie.id);
let storedMovieWatched=watched.find(obj=>obj.id===movie.id);
const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="list-card">
      <div className="poster-wrapper">
        {image ? (
          <img
            src={image}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="info">
        <div className="header">
            <h3 className="title">{title}</h3>
        </div>
        <div className="contrlos">
            <button className="btn" onClick={()=>addMovieToWatchlist(movie)} disabled={watchlistDisabled} >Add to Watchlist</button>
            <button className="btn" onClick={()=>addMovieToWatched(movie)} disabled={watchedDisabled} >Add to Watched</button>
        </div>
      </div>

      </div>
      
  );
};
export default ListCard;