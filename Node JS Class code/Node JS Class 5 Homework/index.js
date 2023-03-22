import express from "express";
import cors from "cors";
import trainersRoutes from "./trainers.routes.js";

const PORT = 3000;
const HOSTNAME = "localhost";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", trainersRoutes);

app.listen(PORT, () => {
  console.log(`Server started listening  at: http://${HOSTNAME}:${PORT}`);
});
