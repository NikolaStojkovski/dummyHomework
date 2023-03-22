import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const getAllTrainers = () => {
  const json = fs.readFileSync("./trainers.json", {
    encoding: "utf-8",
  });
  const trainers = JSON.parse(json);
  return trainers;
};

export const getTrainersById = (id) => {
  const allTrainers = getAllTrainers();
  const trainerWithId = allTrainers.filter((trainer) => trainer.id === id);
  if (!trainerWithId) console.log(`Trainer with this id: ${id} can't be found`);

  return trainerWithId;
};

export const saveTrainersData = (trainers) => {
  fs.writeFileSync("./trainers.json", JSON.stringify(trainers, null, 2));
};

export const addTrainer = (body) => {
  const allTrainers = getAllTrainers();
  allTrainers.push({
    ...body,
    id: uuidv4,
  });
  saveTrainersData(allTrainers);
};

export const updateTrainers = (id, trainer) => {
  const allTrainers = getAllTrainers();
  const index = allTrainers.findIndex((trainer) => trainer.id === id);
  if (index < 0) console.log(`Trainer with id: ${id} can't be found`);

  allTrainers[index] = {
    ...allTrainers[index],
    trainer,
  };
  saveTrainersData(allTrainers);
};

export const deleteTrainerById = (id) => {
  const allTrainers = getAllTrainers();
  const newTrainerData = allTrainers.filter((trainer) => trainer.id === id);
  saveTrainersData(newTrainerData);
};

export const deleteAllTrainers = () => {
  const deleted = {};
  saveTrainersData(deleted);
};
