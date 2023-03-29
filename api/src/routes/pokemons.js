const { Router, response } = require("express");
const router = Router();
const allPokemons = require("../controller/get_pokemons");
const { Pokemon, Type } = require("../db");

router.get("/", async (require, response, next) => {
  try {
    let name = require.query.name; //si recibo name por query lo guardo en una variable
    let total_pokemons = await allPokemons();
    if (name) {
      //si tengo name lo busco en la variable de arriba para mostrar el pokemon en pantalla
      //me traigo el primer pokemon que coincida
      let name_pokemon = await total_pokemons.filter(
        (e) => e.name.toLowerCase().includes(name.toLowerCase()) //lo busco con minusculas
      );
      name_pokemon.length //si encuentro un pokemon lo muestro o respondo con un mensaje de error
        ? response.status(200).send(name_pokemon)
        : response
            .status(404)
            .send("Pokemon ingresado inexistente, pruebe con otro");
    } else {
      response.status(200).send(total_pokemons);
      //sino fue pasado por query muestro todos o sea la pagina normal
    }
  } catch (error) {
    //capturo el error
    next(error);
  }
});

router.get("/:id", async (require, response, next) => {
  try {
    const id = require.params.id;
    const total_pokemons = await allPokemons();
    if (id) {
      let id_pokemon = total_pokemons.filter((e) => e.id == id);
      id_pokemon.length
        ? response.status(200).json(id_pokemon)
        : response.status(404).send("No se encuentra el Pokemon");
    }
  } catch (error) {
    next(error);
  }
});


router.post("/", async (req, res, next) => {
  //Ruta de creacion del pokemon
  let { name, image, hitpoint, attack, defense, speed, height, weight, types } =
    req.body; //Datos que necesito pedir
  try {
    if (
      isNaN(hitpoint) ||
      isNaN(attack) ||
      isNaN(defense) ||
      isNaN(speed) ||
      isNaN(height) ||
      isNaN(weight)
    )
      res.status(404).json({
        info: "Los argumentos: vida, ataque, defensa, velocidad, altura y peso tienen que ser números",
      });

    if (!name) res.status(404).json({ info: "Falta ingresar nombre" });

    const newPokemon = await Pokemon.create({
      name,
      hitpoint,
      image,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    });

    console.log(newPokemon.types)

    let pokemonAlterar = await Pokemon.findByPk(newPokemon.id);
    let typesId = types.map((x) => {
      return Type.findAll({
        where: { name: x },
      });
    });
    typesId = await (await Promise.all(typesId)).flat();
    typesId: typesId.map((x) => x.id);
    
    // console.log(pokemonAlterar);
    const devolver = pokemonAlterar.addType(typesId);
    console.log("funciono");
    res.json(devolver);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
