import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import studentRoutes from "./routes/student.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
const HOSTNAME = "0.0.0.0";
const app = express();

//! PATHS
const staticPageOne = path.join(__dirname, "static-page");

app.use("/static-page", express.static(staticPageOne));

app.use(cors());
app.use("/api", studentRoutes);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server started listening on http://localhost:3000`);
});
