import express from "express";
import router from "./router.const.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOST || "localhost";

// console.log("test env var", process.env.TEST);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
