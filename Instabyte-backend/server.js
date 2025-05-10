import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ligou bb...");
});
