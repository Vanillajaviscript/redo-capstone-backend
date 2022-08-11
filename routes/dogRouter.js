import express from "express";
const router = express.Router();
import { createDog, getDogs, getDog, getDogsByUser, deleteDog, updateDog, getDogsBySearch } from "../controllers/dogController.js";
import auth from "../middleware/auth.js";

//Non-authenticated routes
router.get("/search", getDogsBySearch)
router.get("/", getDogs);
router.get("/:id", getDog);
//Authenticated routes
router.post("/", auth, createDog);
router.delete("/:id", auth, deleteDog);
router.patch("/:id", auth, updateDog)
router.get("/userdogs/:id", auth, getDogsByUser);

export default router;