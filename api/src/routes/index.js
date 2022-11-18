const { Router } = require("express");
const pokemon_Route = require("./pokemons");
const types_Route = require("./types");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemon_Route);
router.use("/types", types_Route);
module.exports = router;
