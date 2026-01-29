import { Router } from "express";
const coordRouter = Router()
const coordController = "../controllers/coordController.js";

coordRouter.get("/", coordController.getCoord);

module.exports = { coordRouter };