import React from "react";
import "./LandingPage.css";
import logo from "./icons/logo.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <header className="hero ">
      <nav className="hero__nav container ">
        <figure className="hero__logo">
          <a href="https://github.com/adrian4058/ProyectoPokemon">
            <img src={logo} alt="logo pokemon" className="hero__huddle" />
          </a>
        </figure>

        <Link to="/home" className="hero__cta">
          About Me
        </Link>
      </nav>
      <section className="hero__main container">
        <div className="hero__texts">
          <h1 className="hero__title">¡Bievenidos a mi Pokémon Project! 👋🏼</h1>
          <p className="hero__paragraph">
            La aplicación es una plataforma para explorar del mundo Pokémon,
            creada con tecnologías como React, Node y Sequelize. Su
            característica distintiva es su capacidad para consumir una API
            externa, lo que proporciona información actualizada y precisa sobre
            los Pokémon. Además, permite ordenamientos, filtrados, ver sus
            detalles y posibilidad de crear nuevos Pokémons. Es ideal para
            cualquier persona interesada en el mundo de los Pokémon.
            <br />
            <br />
            ¡Explora el mundo Pokémon!
          </p>
        </div>
        <Link to="/home" className="hero__home">
          INGRESAR
        </Link>
      </section>
    </header>
  );
}
