const router = require("express").Router();
const Trainer = require("../schemas/trainers.schema");
const {
  getAllTrainers,
  getTrainerById,
  addTrainer,
  updateTrainer,
  deleteTrainer,
} = require("../controller/trainers.controller");

router.get("/", getAllTrainers);

router.get("/:id", getTrainerById);

router.post("/", addTrainer);

router.put("/:id", updateTrainer);

router.delete("/:id", deleteTrainer);

module.exports = router;
