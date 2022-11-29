import React from "react";
import "./Card.css";

export default function Card({ name, image, types }) {
  return (
    <div className="stylesCard">
      <h3 className="name">{name}</h3>
      <img
        src={image}
        alt="imágen"
        className="img"
        width="200px"
        height="200px"
      />
      <ul className="typeStyle">
        <li className="type">
          {typeof types[0] === "string"
            ? types[0].charAt(0).toUpperCase() + types[0].slice(1)
            : types[0]?.name.charAt(0).toUpperCase() + types[0].name.slice(1)}
          {typeof types[1] === "string" ? " - " + types[1] : types[1]?.name}
        </li>
      </ul>
    </div>
  );
}
