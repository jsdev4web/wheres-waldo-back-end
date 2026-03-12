import express from "express";
import cors from 'cors';

const app = express();
app.use(cors())

import { coordRouter } from "./routes/coordRouter.js";

app.use(express.urlencoded({ extended: true }));

app.use("/coord", coordRouter)


app.get("/", (req, res) => {
    res.send("Hello Jermain")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is using port ${PORT}`)
})