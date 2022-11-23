import React from "react";
import "./Card.css";
export default function Card({ name, image, types }) {
  return (
    <div className="card">
      <h3 className="name">{name}</h3>
      <img
        src={image}
        alt="img not found"
        className="img"
        width="200px"
        height="200px"
      />
    </div>
  );
}
