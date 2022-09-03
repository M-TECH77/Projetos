import { Router } from "express"

export const router = Router()

router.get("/", (req, res) => res.send("App com Express e TypeScript"))
