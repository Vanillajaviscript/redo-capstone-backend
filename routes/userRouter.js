import express from "express";
const router = express.Router();
import { signup, signin, googleSignIn } from "../controllers/userController.js";

router.post("/signup", signup);
router.post("/signin", signin)
router.post("/googlesignin", googleSignIn)

export default router;