import { Router } from "express";
import { getCoordHome, getCoordMatch } from "../controllers/coordController.js";

const coordRouter = Router()


coordRouter.get("/", getCoordHome);
coordRouter.get("/:id", getCoordMatch)


export { coordRouter };