import express from "express";
const router = express.Router();
import { createDog, getDogs, getDog } from "../controllers/dogController.js";
import auth from "../middleware/auth.js";

router.post("/", auth, createDog);
router.get("/", getDogs);
router.get("/:id", getDog)

export default router;