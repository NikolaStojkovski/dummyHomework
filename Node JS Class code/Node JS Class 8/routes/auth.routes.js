import express from "express";
import { productsSession } from "../sessions/sessions.const.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Main page</h1>");
});

router.post("/login", productsSession, (req, res) => {
  const body = req.body;

  const dummyUser = {
    username: "user123",
    password: "user12345",
  };

  if (
    body.username === dummyUser.username &&
    body.password === dummyUser.password
  ) {
    req.session.loggedIn = true;
    console.log(req.session);
    res.status(200).send(`You have logged in.`);
  } else {
    req.session.loggedIn = false;
    res.status(400).send(`Wrong credentials.`);
  }
});

router.post("/logout", productsSession, (req, res) => {
  req.session.destroy();
  console.log(req.session);
  res.status(200).send("You have successfully logget out.");
});

export default router;
