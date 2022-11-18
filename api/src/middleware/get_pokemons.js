const axios = require("axios");
const { Pokemon, Type } = require("../db");

//traemos los datos de la api con axios
const getApiInfo = async () => {
  const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then((data) => {
      return data.data.results;
    })
    .then((data) => {
      return Promise.all(data.map((res) => axios.get(res.url)));
    })
    .then((data) => {
      return data.map((res) => res.data);
    });
  let pokeArray = resp.map((result) => {
    return {
      id: result.id,
      name: result.name,
      types: result.types.map((t) => t.type.name),
      image: result.sprites.front_default,
      hitpoint: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
      defense: result.stats[2].base_stat,
      speed: result.stats[3].base_stat,
      height: result.height,
      weight: result.weight,
    };
  });
  return pokeArray;
};

const getDbInfo = async () => {
  const results = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return results;
};

const allPokemons = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = apiInfo.concat(dbInfo);
  return totalInfo;
};

module.exports = allPokemons;
