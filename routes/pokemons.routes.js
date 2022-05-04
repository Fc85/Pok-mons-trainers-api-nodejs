const router = require("express").Router();
const Pokemons = require("../schemas/pokemons.schema");
const {
  getAllPokemons,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
} = require("../controller/pokemons.controller");

router.get("/", getAllPokemons);

router.get("/:id", getPokemonById);

router.post("/", addPokemon);

router.put("/:id", updatePokemon);

router.delete("/:id", deletePokemon);

module.exports = router;
