import express from "express";
import { listarposts } from "../controller/postsController.js";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listarposts);
};

export default routes;
