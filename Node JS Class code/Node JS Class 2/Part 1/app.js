const { read, create, update, remove } = require("./src/helpers");
create("newFolder", "data.json", JSON.stringify({ name: "Nikola" }));
