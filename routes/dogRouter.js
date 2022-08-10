import express from "express";
const router = express.Router();
import { createDog, getDogs  } from "../controllers/dogController.js";

router.post("/", createDog);
router.get("/", getDogs);


export default router;