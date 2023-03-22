import express from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import fs from "fs";
import { createAccesToken } from "../jwt.const.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const userData = req.body;
  console.log(userData);

  const hashedPassword = bcrypt.hashSync(userData.password, 10);

  const user = {
    id: uuidv4(),
    username: userData.username,
    password: hashedPassword,
  };

  fs.writeFileSync("./data/users.json", JSON.stringify([user]));

  res.status(200).send(user);
});

router.post("/login", (req, res) => {
  const userData = req.body;

  const users = JSON.parse(fs.readFileSync("./data/users.json"));

  const user = users.find((user) => user.username === userData.username);

  if (!user) res.status(404).send("User not found!");

  const isSamePassword = bcrypt.compareSync(userData.password, user.password);

  if (isSamePassword) {
    res.status(200).send("You are logged in ");
  } else {
    res.status(400).send("Invalid credentials");
  }

  const token = createAccesToken(user.id);

  console.log(token);

  res.sendStatus(200);
});
export default router;
