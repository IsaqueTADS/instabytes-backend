import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("ligou bb...");
});

app.get("/api", (req, res) => {
  res.status(200).send("<h1>Cara, namoral, criar um servidor com express é mamão com açucar</h1>");
});
