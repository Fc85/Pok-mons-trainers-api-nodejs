const Trainer = require("../schemas/trainers.schema");

const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    return res.status(200).send(trainers);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const getTrainerById = async (req, res) => {
  try {
    const trainers = await Trainer.findById(req.params.id);
    return res.status(200).send(trainers);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const addTrainer = async (req, res) => {
  try {
    await Trainer.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
    });
    return res.status(200).send({ message: "Trainer added successfuly" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const updateTrainer = async (req, res) => {
  try {
    await Trainer.findOneAndUpdate({ _id: req.params.id }, req.body);
    return res.status(200).send({ message: "Trainer updated successfuly" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

const deleteTrainer = async (req, res) => {
  try {
    await Trainer.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "Trainer deleted successfuly" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports = {
  getAllTrainers,
  getTrainerById,
  addTrainer,
  updateTrainer,
  deleteTrainer,
};
