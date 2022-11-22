import React from "react";
import { Link } from "react-router-dom";
import "./LandinPage.css";
export default function LandingPage() {
  return (
    <div className="landing">
      <img src="https://i0.wp.com/overcluster.com/wp-content/uploads/2018/01/Pokemon-M-Overcluster.jpg?resize=770%2C433&ssl=1" />
      <h1>Proyecto individual Henry</h1>
      <Link to="/home">
        <button className="button">Ingresar</button>
      </Link>
    </div>
  );
}
