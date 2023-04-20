import React, { useState } from "react";

function ListingCard({greg, handleDelete}) {
  const [fav, setFav] = useState(false);

  function handleClick() {
    setFav(!fav)
  }
 
  function handleGregDelete() {
    fetch("http://localhost:6001/listings/"+greg.id, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((greg) => {
      handleDelete(greg.id);
    });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={greg.image} alt={greg.description} />
      </div>
      <div className="details">
        {fav ? (
          <button 
          onClick={handleClick}
          className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button 
          onClick={handleClick}
          className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{greg.description}</strong>
        <span> · {greg.location}</span>
        <button onClick={handleGregDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;