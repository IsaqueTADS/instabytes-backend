import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
qpp.get("/", (req, res) => {
  return res.send("Funcionou");
});
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ligou bb...");
});
