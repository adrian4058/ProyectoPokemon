const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/type"); //Trae todos los tipos
    const types = await api.data; // trae la respuesta en data
    console.log(types);
    for (t of types.results) {
      //Entra a la propiedad results, a cada elemento..
      const find = await Type.findOne({ where: { name: t.name } }); // Entra a la propiedad name y busca si ya existe
      if (find) return res.json(await Type.findAll());
      await Type.create({ name: t.name });
    }
    res.json(await Type.findAll()); //Finalmente devuelvo todos los tipos de la Db.
  } catch (error) {
    next(error);
  }
});

module.exports = router;
