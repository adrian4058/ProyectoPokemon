import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link } from "react-router-dom";
import "./Details.css";
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
      <div className="details-container">
        {details.length
          ? details.map((p) => (
              <div className="details-content">
                <div className="details-pokemon">
                  <h1 className="names">{p.name.toUpperCase()}</h1>
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
                  <h4> STATS </h4>
                  <ul>
                    <li>Vida: {p.hitpoint + " ❤"}</li>
                    <li>Fuerza: {p.attack + " ⚔"}</li>
                    <li>Defensa: {p.defense + " 🛡"} </li>
                  </ul>
                  <ul>
                    <li>Velocidad: {p.speed + " ⚡"}</li>
                    <li>Altura: {p.height + " ↕"} </li>
                    <li>Peso: {p.weight + " ⬇"} </li>
                  </ul>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

{
  /* <img
            src={
              "https://cdn.dribbble.com/users/1204535/screenshots/11195730/media/6823f0d3a3fc4ccf925df7bc710cd017.gif"
            }
            // width="250px"
            // height="300px"
            alt="Not found"
          /> */
}

// {p.types.length === 2 ? (
//   <div>
//     <h3 className="type1">
//       <ul className="type">
//         <li>
//           {typeof p.types[0] === "string"
//             ? p.types[0]
//             : p.types[0]?.name}
//           -
//           {typeof p.types[1] === "string"
//             ? p.types[1]
//             : p.types[1]?.name}
//         </li>
//       </ul>
//     </h3>
//   </div>
// ) : (
//   <div>
//     <h3 className="type2">
//       {typeof p.types[0] === "string"
//         ? p.types[0]
//         : p.types[0]?.name}
//     </h3>
//   </div>
// )}
