const router = require("express").Router();
const Trainer = require("../schemas/trainers.schema");
const {
  getAllTrainers,
  getTrainerById,
  getTrainerByName,
  getTrainerByGender,
  addTrainer,
  updateTrainer,
  deleteTrainer,
} = require("../controller/trainers.controller");

router.get("/", getAllTrainers);

router.get("/:id", getTrainerById);

router.get("/name/:name", getTrainerByName);

router.get("/gender/:gender", getTrainerByGender);

router.post("/", addTrainer);

router.put("/:id", updateTrainer);

router.delete("/:id", deleteTrainer);

module.exports = router;
