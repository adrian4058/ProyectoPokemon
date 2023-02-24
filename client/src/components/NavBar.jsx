import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="navegador" className="header">
      <ul>
        <li>
          <Link to="/create" className="created">
            <button>Create</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
