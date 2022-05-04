const Pokemons = require("../schemas/pokemons.schema");

const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemons.find().populate("trainer");
    return res.status(200).send(pokemons);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemons.findById(req.params.id).populate("trainer");
    return res.status(200).send(pokemon);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const getPokemonByTrainerId = async (req, res) => {
  try {
    const pokemon = await Pokemons.where({ trainer: req.params.id })
      .find()
      .populate("trainer");
    return res.status(200).send(pokemon);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const getPokemonByGender = async (req, res) => {
  try {
    const pokemon = await Pokemons.where({ gender: req.params.gender })
      .find()
      .populate("trainer");
    return res.status(200).send(pokemon);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const getPokemonByName = async (req, res) => {
  try {
    const pokemon = await Pokemons.where({ name: req.params.name })
      .find()
      .populate("trainer");
    return res.status(200).send(pokemon);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const addPokemon = async (req, res) => {
  try {
    await Pokemons.create({
      name: req.body.name,
      level: req.body.level,
      health_point: req.body.health_point,
      trainer: req.body.trainer,
      gender: req.body.gender,
      weight: req.body.weight,
      size: req.body.size,
    });
    return res.status(200).send({ message: "Pokemon added successfuly" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const updatePokemon = async (req, res) => {
  try {
    await Pokemons.findOneAndUpdate({ _id: req.params.id }, req.body);
    return res.status(200).send({ message: "Pokemon updated successfuly" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const deletePokemon = async (req, res) => {
  try {
    await Pokemons.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "Pokemon deleted successfuly" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports = {
  getAllPokemons,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonByTrainerId,
  getPokemonByGender,
  getPokemonByName,
};
