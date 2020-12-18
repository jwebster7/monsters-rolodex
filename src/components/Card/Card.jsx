import React from "react";

import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
