import React from "react";

import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ users }) => {
  const usersDisplay = users.map((user) => {
    return (
      <Card key={user.id} {...user} />
    );
  });

  return <div className="card-list">{usersDisplay}</div>;
};

export default CardList;
