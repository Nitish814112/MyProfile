import React from 'react';

const Cards = () => {
  return (
    <div className="card" style={{ height: "250px", width: "18rem", margin:"35px"}}>
      <img src="c1-img.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default Cards;

