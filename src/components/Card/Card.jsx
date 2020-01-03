import React from "react";
import "./Card.css";

export default props => {
  return (
    <div className="card">
      <img alt="robohash" src={`https://robohash.org/${props.name}.png`}></img>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};
