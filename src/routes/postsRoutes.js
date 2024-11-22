import express from "express";
import { listarposts, postarNovoPost } from "../controller/postsController.js";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listarposts);
  app.post("/posts", postarNovoPost)
};

export default routes;
