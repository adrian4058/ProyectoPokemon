import axios from "axios";
const GET_POKEMONS = "GET_POKEMONS";
const FILTER_BY_TYPE = "FILTER_BY_TYPE";
const FILTER_CREATED = "FILTER_CREATED";
const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
const SORT = "SORT";
const SEARCH_NAME = "SEARCH_NAME";
const GET_TYPE = "GET_TYPE";
const GET_DETAIL = "GET_DETAIL";

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemons", {});
    return dispatch({
      type: GET_POKEMONS,
      payload: json.data,
    });
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function filterAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

export function Sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({
        type: SEARCH_NAME,
        payload: json.data,
      });
    } catch (error) {
      return alert("No se encuentra el nombre");
    }
  };
}

export function getType() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPE,
      payload: info.data,
    });
  };
}

export function createPokemon(payload) {
  return async function () {
    const res = await axios.post("http://localhost:3001/pokemons", payload);
    return res;
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
