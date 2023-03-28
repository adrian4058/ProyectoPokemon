import React from "react";
import NavBar from "./NavBar";
import "./About.css";

export default function About() {
  return (
    <div className="about-total">
      <NavBar currentComponent="about" />
      <div className="about-content">
        <div className="about-container">
          <h1>About Me</h1>
          <div className="about-paragraph">
            <h2>¡Hola! Gracias por visitar mi proyecto.</h2>
            <p>
              Mi nombre es Adrián, un apasionado desarrollador web en busca de
              nuevas oportunidades laborales. Mi enfoque principal es el
              desarrollo de aplicaciones web utilizando tecnologías modernas y
              eficientes que permiten construir productos de alta calidad y
              escalables. He trabajado en una variedad de proyectos web
              utilizando una amplia gama de tecnologías. Mi objetivo es crear
              soluciones web personalizadas que satisfagan las necesidades de
              mis clientes, con una atención meticulosa a los detalles y un
              enfoque centrado en el usuario final. Si buscas un desarrollador
              web que pueda ayudarte a llevar tu proyecto al siguiente nivel, no
              dudes en ponerte en contacto conmigo. Estoy ansioso por trabajar
              en nuevos desafíos emocionantes y formar parte de proyectos
              innovadores que marquen la diferencia en la web e impacten
              posivitamente .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
