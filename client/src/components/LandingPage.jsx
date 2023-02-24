import React from "react";
import { Link } from "react-router-dom";
import "./LandinPage.css";

export default function LandingPage() {
  return (
    <div className="lp">
      <div className="social">
        <div className="about">
          <p>
            <Link className="social-about" to="/about">
              About Me
            </Link>
          </p>
        </div>
        <div className="social-options">
          <div>
            <a
              className="social-btn"
              href="https://www.linkedin.com/in/adrian4058"
            >
              LinkedIn
            </a>
          </div>
          <div className="git-btn">
            <a className="social-btn" href="https://www.github.com/adrian4058">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="paragram">
        <h2 className="title">
          ¡Hola! Permíteme presentarte mi Single Page Application
        </h2>
        <p>
          <br /> Es una plataforma de exploración del mundo Pokémon, creada
          utilizando tecnologías modernas como React, Node y Sequelize
          <br /> Lo que la hace única es su capacidad para consumir una API
          externa, lo que significa que siempre tendrás acceso a información
          actualizada y precisa sobre los Pokémon.
          <br /> Además, puedes crear nuevos Pokémon y ver los detalles de cada
          uno de ellos. Esta aplicación es perfecta para cualquier persona
          interesada en el mundo de los Pokémon.
          <br /> Espero que disfrutes usando mi aplicación tanto como yo
          disfruté creándola. ¡Explora el mundo Pokémon!
        </p>
      </div>
      <div>
        <Link to="/home">
          <button className="button"> INGRESAR </button>
        </Link>
      </div>
    </div>
  );
}
