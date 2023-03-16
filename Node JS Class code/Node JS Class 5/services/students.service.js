import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studentsDbPath = path.join(__dirname, "..", "db.json");

const getStudentsData = () => {
  const students = fs.readFileSync(studentsDbPath, { encoding: "utf-8" });
};

export default getStudentsData;
