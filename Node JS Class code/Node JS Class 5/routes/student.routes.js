import express from "express";
import * as studentService from "../services/students.service.js";

const router = express.Router();

router.get("/students", (req, res) => {
  const students = studentService.getStudentsData();
  res.status(200).send(["Ivo", "Ivan"]);
});

router.post("/students", (req, res) => {
  console.log(req);
  const newStudent = req.body;

  req.sendStatus(200);
});

export default router;
