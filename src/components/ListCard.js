import React, { useContext } from "react";


function ListCard({ image, title }){
  

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
            <button className="btn">Add to Watchlist</button>
        </div>
      </div>

      </div>
      
  );
};
export default ListCard;