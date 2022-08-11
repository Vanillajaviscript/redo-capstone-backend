import express from "express";
const router = express.Router();
import { createDog, getDogs, getDog, getDogsByUser } from "../controllers/dogController.js";
import auth from "../middleware/auth.js";

router.post("/", auth, createDog);
router.get("/", getDogs);
router.get("/:id", getDog)
router.get("/userdogs/:id", auth, getDogsByUser)
export default router;