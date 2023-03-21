import React from "react";
import "./Card.css";

export default function Card({ name, image, types }) {
  return (
    <div className="coso">
      <div className={`card ${types[0]}`}>
        <div className="face front">
          <div className={types[0].name}>
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
            <p >Types</p>
            <h2 className={`type color-${types[0]}`}>
              {" "}
              {typeof types[0] === "string"
                ? types[0].charAt(0).toUpperCase() + types[0].slice(1)
                : types[0]?.name.charAt(0).toUpperCase() +
                  types[0].name.slice(1)}
              {typeof types[1] === "string"
                ? " - " + types[1].charAt(0).toUpperCase() + types[1].slice(1)
                : null}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Card({ name, image, types }) {
//   return (
//     <div className={`stylesCard ${types[0]}`}>
//       {/* <div className="front"> */}
//         <h3 className="name">{name}</h3>
//         <img
//           src={image}
//           alt="imágen"
//           className="img"
//           width="200px"
//           height="200px"
//         />
//         {}
//         <ul className="typeStyle">
//           <li className="type">
// {typeof types[0] === "string"
//   ? types[0].charAt(0).toUpperCase() + types[0].slice(1)
//   : types[0]?.name.charAt(0).toUpperCase() + types[0].name.slice(1)}
// {typeof types[1] === "string"
//   ? " - " + types[1].charAt(0).toUpperCase() + types[1].slice(1)
//   : null}
//           </li>
//         </ul>
//       {/* </div> */}
//       {/* <div className="face back">
//         <div className="type-container">
//           <h1>{name}</h1>
//           <h2>Type</h2>
//           <div className="img-types">
//             {types.map((t) => {
//               return <img src={imgType[t.name]} />;
//             })}
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }
