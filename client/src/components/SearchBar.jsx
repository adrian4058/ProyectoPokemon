import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNamePokemons(name));
  };

  return (
    <div>
      <input
      className="search"
        type="text"
        placeholder="Buscá tu Pokemón..."
        onChange={handleInputChange}
      />
      <button className="boton" type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
  );
}
