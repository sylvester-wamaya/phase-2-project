import React, { useContext } from "react";
import {GlobalContext} from "../context/GlobalState";


function ListCard({ image, title, movie }){
  
const {
    addMovieToWatchlist, watchlist
} = useContext(GlobalContext);
let storedMovie = watchlist.find(obj=>obj.id===movie.id);
const watchlistDisabled = storedMovie ? true : false;
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
        </div>
      </div>

      </div>
      
  );
};
export default ListCard;