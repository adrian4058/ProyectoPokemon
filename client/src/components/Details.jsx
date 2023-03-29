import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import "./Details.css";
import loading from "./icons/loading.gif";
import NavBar from "./NavBar";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  let details = useSelector((state) => state.detail);
  return (
    <div className="details">
      <NavBar />
      <div className="details-content">
        {details.length ? (
          details.map((p) => (
            <div className="details-container">
              <div className="details-pokemon">
                <h1>{p.name.toUpperCase()}</h1>
                <img
                  className="imagen"
                  src={p.image}
                  alt=""
                  width="300px"
                  height="300px"
                />
                {console.log(details)}
                <p>Types</p>
                <h2 className={`type color-${details[0].types[0]}`}>
                  {details[0].types.length === 2 ? (
                    <>
                      {details[0].types[0].toUpperCase() +
                        " - " +
                        details[0].types[1].toUpperCase()}
                    </>
                  ) : (
                    <>{details[0].types[0].toUpperCase()}</>
                  )}
                </h2>
              </div>
              <div className="stats-content">
                <h1 className={`color-${details[0].types[0]}`}> STATS </h1>
                <div className="stats-pokemon">
                  <ul>
                    <li>Vida: {p.hitpoint + " ❤"}</li>
                    <li>Fuerza: {p.attack + " ⚔"}</li>
                    <li>Defensa: {p.defense + " 🛡"} </li>
                  </ul>
                  <ul>
                    <li>Velocidad: {p.speed + "⚡"}</li>
                    <li>Altura: {p.height + " ↕"} </li>
                    <li>Peso: {p.weight + " ⬇"} </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="home-loading">
            Cargando...
            <img src={loading} alt="Loading..." />
          </div>
        )}
      </div>
    </div>
  );
}
