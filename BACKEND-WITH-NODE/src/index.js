import express from "express";

const app = express();
const port = 8080;

//running at localhost:8080 or whatever port is stated
app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(port, function () {
  console.log(`Running at http://localhost:${port} on local!`);
});
