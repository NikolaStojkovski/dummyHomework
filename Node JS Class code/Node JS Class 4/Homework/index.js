import http from "http";
const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Basic NodeJS Homework</h1>`);
    return res.end();
  }
  if (url === "/students") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<ul>
      <li>Student Name: Nikola</li>
      <li>Student lastname: Stojkovski</li>
      <li>Academy: SEDC</li>
      <li>Subject: Basic NodeJS</li>
    </ul>`);
    return res.end();
  }
  return res.end();
});
server.listen(port, () => {
  console.log(`Server started listening at http://localhost:${port}`);
});
