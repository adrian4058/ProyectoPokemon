import React from "react";
import "./Card.css";

export default function Card({ name, image, types, id }) {
  return (
    <div className="coso">
      <div className={`card ${types[0]}`}>
        <div className="face front">
          <div className={types[0]}>
            <img
              src={image}
              alt="imágen"
              className="img"
              width="200px"
              height="200px"
            />
            <h3>{name}</h3>
          </div>
        </div>

        <div className="face back">
          <div className="type-container">
            <h1>{name}</h1>
            <h4>Ver detalles</h4>
            <p>Types</p>
            <h2 className={`type color-${types[0]}`}>
              {types.length === 2 ? (
                <>{types[0].toUpperCase() + " - " + types[1].toUpperCase()}</>
              ) : (
                <>{types[0].toUpperCase()}</>
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
