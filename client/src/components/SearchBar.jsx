import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import "./SearchBar.css";
import lupa from "./icons/lupa.png";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el término de búsqueda antes de enviar la consulta
    if (name.trim().length < 2) {
      alert("Ingrese un término de búsqueda válido");
      return;
    }

    // Enviar la consulta al servidor
    dispatch(getNamePokemons(name));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscá tu Pokemón..."
        value={name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-submit" type="submit">
        <img src={lupa} alt="lupa" style={{ maxWidth: "30px" }}></img>
      </button>
    </form>
  );
}

