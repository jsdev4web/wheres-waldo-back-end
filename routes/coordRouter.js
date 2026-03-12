import { Router } from "express";
import { getCoordHome, coordOne, coordTwo, coordThree, getCoordMatchOne, getCoordMatchTwo, getCoordMatchThree, getAll, resetData } from "../controllers/coordController.js";

const coordRouter = Router()


coordRouter.get("/", getCoordHome);

coordRouter.get("/one", coordOne)
coordRouter.get("/two", coordTwo)
coordRouter.get("/three", coordThree)

coordRouter.get("/one/:id", getCoordMatchOne)
coordRouter.get("/two/:id", getCoordMatchTwo)
coordRouter.get("/three/:id", getCoordMatchThree)

coordRouter.get("/all", getAll)

coordRouter.get("/reset", resetData)


export { coordRouter };