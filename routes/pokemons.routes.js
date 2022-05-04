const router = require("express").Router();
const Pokemons = require("../schemas/pokemons.schema");
const {
  getAllPokemons,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonByTrainerId,
  getPokemonByGender,
  getPokemonByName,
} = require("../controller/pokemons.controller");

router.get("/", getAllPokemons);

router.get("/:id", getPokemonById);

router.get("/trainer/:id", getPokemonByTrainerId);

router.get("/gender/:gender", getPokemonByGender);

router.get("/name/:name", getPokemonByName);

router.post("/", addPokemon);

router.put("/:id", updatePokemon);

router.delete("/:id", deletePokemon);

module.exports = router;
