import express from "express";
import router from "./router.const.js";
import cors from "cors";

const PORT = 4000;
const HOSTNAME = "localhost";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
