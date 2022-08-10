import express from "express";
const router = express.Router();
import { createDog, getDogs  } from "../controllers/dogController.js";
import auth from "../middleware/auth.js";

router.post("/", auth, createDog);
router.get("/", getDogs);


export default router;