import express from "express"
import cors from "cors"
import logger from "morgan"

import { router } from "./routes/index"

// Cria o App
export const app = express()

// Cria os Middlewares
app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/", router)
