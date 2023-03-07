const fs = require("fs");

const data = fs.readFileSync("tasks.json");

const task = JSON.parse(data);

task.push({
  id: "random",
  task: "Node JS",
  isFUnushed: true,
});
const dataJson = JSON.stringify(task);

fs.writeFileSync("tasks.json", dataJson);
console.log("Added new task");
