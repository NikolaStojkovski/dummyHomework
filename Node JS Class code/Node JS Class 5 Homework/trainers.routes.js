import express from "express";
import * as trainerService from "./trainers.service.js";

const router = express.Router();

router.get("/trainers", (req, res) => {
  try {
    const trainers = trainerService.getAllTrainers();
    res.status(200).send(trainers);
  } catch (error) {
    res.status(400).send(`There was a problem`);
  }
});

router.post("/trainers", (req, res) => {
  const trainer = req.body;
  try {
    trainerService.addTrainer(trainer);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(`There was a problem`);
  }
});

router.put("/trainers", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    trainerService.updateTrainers(id, body);
    res.status(200).send("Succesfully updated");
  } catch (error) {
    res.status(400).send(`There was a problem updating`);
  }
});

router.delete("/trainers/:id", (req, res) => {
  const id = req.params.id;
  try {
    trainerService.deleteTrainerById(id);
    res.status(200).send("Succesfully deleted trainer by id ");
  } catch (error) {
    res.status(400).send(`There was a problem deleting a trainer by id `);
  }
});

router.delete("/trainers", (req, res) => {
  try {
    trainerService.deleteAllTrainers();
    res.status(200).send("Succesfully deleted all trainers ");
  } catch (error) {
    res.status(400).send(`There was a problem deleting all trainers `);
  }
});

export default router;
