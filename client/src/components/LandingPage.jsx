import React from "react";
import { Link } from "react-router-dom";
import "./LandinPage.css";
export default function LandingPage() {
  return (
    <div className="lp">
      <div></div>
      <Link to="/home">
        <button className="button"> INGRESAR </button>
      </Link>
    </div>
  );
}
